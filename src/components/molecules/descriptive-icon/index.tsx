import { View } from 'react-native';
import { Headline, LucideIcon } from '@/components/atoms';
import DescriptiveIconProps from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';

const DescriptiveIcon = ({
  testId,
  iconProps,
  textProps,
  isRow = true,
}: DescriptiveIconProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const wrapperAppliedStyles = [themedStyles['wrapper']];

  //

  // This piece of code sets the private _isOutline to undefined in case of the consumer passing ANY of these props: (isCircle, isOutline, hasWrapper)
  // This happens to facilitate the change of variations between consumers

  let _isOutline: boolean | undefined = true;
  if (
    iconProps.isCircle !== undefined ||
    iconProps.isOutline !== undefined ||
    iconProps.hasWrapper !== undefined
  )
    _isOutline = undefined;

  // This piece of code sets the private _isOutline to undefined in case of the consumer passing ANY of these props: (isCircle, isOutline, hasWrapper)
  // This happens to facilitate the change of variations between consumers

  //

  return (
    <View
      testID={`${testId}-descriptive-icon-container`}
      style={[
        wrapperAppliedStyles,
        isRow ? themedStyles.isRow : themedStyles.isColumn,
      ]}>
      <LucideIcon
        testId={`${testId}-descriptive`}
        isOutline={_isOutline}
        {...iconProps}
      />
      <View style={themedStyles.textWrapper}>
        <Headline
          testId={`${testId}-descriptive-icon`}
          {...textProps}
          size="sm"
          weight="Medium"
          style={themedStyles.iconText}
        />
      </View>
    </View>
  );
};

export default DescriptiveIcon;
