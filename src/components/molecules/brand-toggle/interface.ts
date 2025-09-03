import type { SwitchProps } from 'react-native';
import type ParagraphProps from '@/components/atoms/typography/paragraph/interface';
import { RNStyle } from '@/types/themes';

interface BrandToggleProps extends Omit<SwitchProps, 'onValueChange' | 'style'> {
  testId: string;
  size?: 'md' | 'lg';
  onChangeValue?: (v: boolean) => void;
  disabled?: boolean;
  containerStyle?: RNStyle;
  titleProps?: Omit<ParagraphProps,'testId'>;
  descriptionProps?:  Omit<ParagraphProps,'testId'>;
}

export default BrandToggleProps;