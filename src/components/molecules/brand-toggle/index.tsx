import { View, Platform } from 'react-native';
import { BaseToggle, Paragraph } from '@/components/atoms';
import BrandToggleProps from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { useMemo } from 'react';
import { useTranslate } from '@/hooks';

const BrandToggle = ({
  testId,
  titleProps,
  descriptionProps,
  containerStyle,
  size = 'md',
  value,
  onChangeValue,
  disabled,
  loading,
  ...restProps
}: BrandToggleProps) => {
  const { getThemeColor, getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const { isRTL } = useTranslate();

  const trackColor = useMemo(
    () => ({
      false: getThemeColor(
        disabled || loading
          ? 'toggleDisabledBackground'
          : 'toggleDefaultBackground',
      ),
      true: getThemeColor(
        disabled || loading
          ? 'toggleDisabledBackground'
          : 'toggleSelectedBackground',
      ),
    }),
    [disabled, loading, getThemeColor],
  );

  const thumbColor =
    Platform.OS === 'android' ? getThemeColor('toggleDefaultKnob') : undefined;

  const iosBg = getThemeColor('toggleDefaultBackground');
  return (
    <View
      testID={`${testId}-brand-toggle-container`}
      style={[themedStyles.container, containerStyle]}>
      <BaseToggle
        testId={`${testId}-switch`}
        value={loading ? !value : value}
        onValueChange={onChangeValue}
        disabled={disabled || loading}
        trackColor={trackColor}
        thumbColor={thumbColor}
        ios_backgroundColor={iosBg}
        style={[
          themedStyles[size],
          { transform: [{ scaleX: isRTL ? -1 : 1 }] },
        ]}
        {...restProps}
      />
      <View style={themedStyles.contentContainer}>
        {titleProps && (
          <Paragraph
            testId={`${testId}-brand-toggle-title`}
            size={size}
            weight="Semibold"
            style={themedStyles.title}
            {...titleProps}
          />
        )}
        {descriptionProps && (
          <Paragraph
            testId={`${testId}-brand-toggle-description`}
            size={size}
            style={themedStyles.description}
            weight="Regular"
            {...descriptionProps}
          />
        )}
      </View>
    </View>
  );
};

export default BrandToggle;
