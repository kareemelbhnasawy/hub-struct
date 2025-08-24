import { RNStyle } from '@/types/themes';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';
import LucideIconProps from '@/components/atoms/lucide-icon/interface';
import ActionMenuProps from '../action-menu/interface';

interface SelectInputProps
  extends Omit<
    ActionMenuProps,
    'modalVisible' | 'setModalVisible' | 'snapPoints'
  > {
  style?: RNStyle;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  placeholderProps?: { [x: string]: string };
  onChangeValue?: () => string;
  value?: string;
  labelProps?: Omit<ParagraphProps, 'testId'>;
  isRequired?: boolean;
  inputStyle?: RNStyle;
  leadingIconProps?: Omit<LucideIconProps, 'testId' | 'snapPoints'>;
  errorProps?: Omit<ParagraphProps, 'testId'>;
}

export default SelectInputProps;
