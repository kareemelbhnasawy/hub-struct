import { View } from 'react-native';
import { BaseToggle, Paragraph } from '@/components/atoms';
import BrandToggleProps from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';

const BrandToggle = ({
  testId,
  titleProps,
  descriptionProps,
  ...toggleProps
}: BrandToggleProps) => {
  const { getThemeColor, getThemedStyles } = useThemeStore();

  // Get track color based on state
  const getTrackColor = () => ({
    false: getThemeColor(
      toggleProps.disabled
        ? 'toggleDisabledBackground'
        : 'toggleDefaultBackground',
    ),
    true: getThemeColor(
      toggleProps.disabled
        ? 'toggleDisabledBackground'
        : 'toggleSelectedBackground',
    ),
  });

  // Get thumb color based on state
  const getThumbColor = () =>
    getThemeColor(
      toggleProps.disabled
        ? 'toggleDisabledKnob'
        : toggleProps.value
          ? 'toggleSelectedKnob'
          : 'toggleDefaultKnob',
    );

  const themedStyles = getThemedStyles(styles);

  return (
    <View
      testID={`${testId}-brand-toggle-container`}
      style={themedStyles.container}>
      <BaseToggle
        testId={`${testId}-brand`}
        {...toggleProps}
        trackColor={getTrackColor()}
        thumbColor={getThumbColor()}
        ios_backgroundColor={getThemeColor('toggleDefaultBackground')}
      />
      <View style={themedStyles.contentContainer}>
        {titleProps && (
          <Paragraph
            testId={`${testId}-brand-toggle-title`}
            size="md"
            style={themedStyles.title}
            {...titleProps}
          />
        )}
        {descriptionProps && (
          <Paragraph
            testId={`${testId}-brand-toggle-description`}
            size="lg"
            style={themedStyles.description}
            {...descriptionProps}
          />
        )}
      </View>
    </View>
  );
};

export default BrandToggle;
