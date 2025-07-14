import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';
import SkeletonUnitProps from '_components/atoms/skeleton-unit/skeleton-unit.props';
import StringProps from '../base-text/string.props';
import TypographySizes from '../constants/typography-sizes.constant';
import FontStyle from '../constants/typography-font-style.constant';
import BaseTextProps from '../base-text/base-text.props';

interface LabelProps extends BaseTextProps {
  testId: string;
  size?: TypographySizes;
  containerStyle?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  fontStyle?: FontStyle;
  stringProps: StringProps;
  textStyle?: StyleProp<TextStyle>;
  isLoading?: boolean;
  skeletonProps?: Omit<SkeletonUnitProps, 'testId'>;
}

export default LabelProps;
