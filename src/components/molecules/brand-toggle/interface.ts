import type { SwitchProps } from 'react-native';
import type ParagraphProps from '@/components/atoms/typography/paragraph/interface';

interface BrandToggleProps extends Omit<SwitchProps, 'onValueChange' | 'value' | 'style'> {
  testId: string;
  size?: 'md' | 'lg';
  value?: boolean;
  onValueChange?: (v: boolean) => void;
  disabled?: boolean;
  containerStyle?: object;
  titleProps?: Omit<ParagraphProps,'testId'>;
  descriptionProps?:  Omit<ParagraphProps,'testId'>;
}

export default BrandToggleProps;