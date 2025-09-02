import ParagraphProps from '@/components/atoms/typography/paragraph/interface';
import { RNStyle } from '@/types/themes';
import { SwitchProps } from 'react-native';

interface BrandToggleProps extends Omit<SwitchProps, 'testID'> {
  testId: string;
  titleProps?: Omit<ParagraphProps, 'testId'>;
  descriptionProps?: Omit<ParagraphProps, 'testId'>;
  containerStyle?: RNStyle;
}

export default BrandToggleProps;
