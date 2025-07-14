import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import SkeletonUnitProps from '_components/atoms/skeleton-unit/skeleton-unit.props';
import TypographySizes from '../constants/typography-sizes.constant';

interface NumberProps {
  testId: string;
  textStyle?: StyleProp<TextStyle>;
  size?: TypographySizes;
  number?: number;
  currency?: string;
  fractionDigitsCount?: number;
  includeCurrency?: boolean;
  containerStyle?: ViewStyle;
  isLoading?:boolean;
  skeletonProps?:Omit<SkeletonUnitProps,'testId'>;
}

export type {NumberProps};
