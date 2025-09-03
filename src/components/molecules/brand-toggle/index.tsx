import { View, Platform } from 'react-native';
import { BaseToggle, Paragraph } from '@/components/atoms';
import BrandToggleProps from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { useMemo } from 'react';

const BrandToggle = ({
  testId,
  titleProps,
  descriptionProps,
  containerStyle,
  size = 'md',
  value,
  onValueChange,
  disabled,
  ...restProps
}: BrandToggleProps) => {
  const { getThemeColor, getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const trackColor = useMemo(
    () => ({
      false: getThemeColor(disabled ? 'toggleDisabledBackground' : 'toggleDefaultBackground'),
      true: getThemeColor(disabled ? 'toggleDisabledBackground' : 'toggleSelectedBackground'),
    }),
    [disabled, getThemeColor]
  );

  const thumbColor =
    Platform.OS === 'android'
      ? getThemeColor('toggleDefaultKnob')
      : undefined;

  const iosBg = getThemeColor('toggleDefaultBackground');

  const wrapperW = size === 'lg' ? themedStyles.lgToggleWidth : themedStyles.mdToggleWidth;
  const wrapperH = size === 'lg' ? themedStyles.lgToggleHeight : themedStyles.mdToggleHeight;

  return (
    <View
      testID={`${testId}-brand-toggle-container`}
      style={[themedStyles.container, containerStyle, wrapperW, wrapperH]}
    >
      <BaseToggle
        testId={`${testId}-switch`}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        trackColor={trackColor}
        thumbColor={thumbColor}
        ios_backgroundColor={iosBg}
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
