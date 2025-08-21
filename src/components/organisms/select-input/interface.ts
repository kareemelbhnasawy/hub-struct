import { RNStyle } from '@/types/themes';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';
import LucideIconProps from '@/components/atoms/lucide-icon/interface';
import ActionMenuProps from '../action-menu/interface';

// TODO: extends select modal
interface SelectInputProps extends ActionMenuProps {
  style?: RNStyle;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  placeholderProps?: { [x: string]: string };
  onChangeValue?: () => string;
  value?: string;
  labelProps?: ParagraphProps;
  required?: boolean;
  inputStyle?: RNStyle;
  leadingIconProps?: Omit<LucideIconProps, 'testId' | 'snapPoints'>;
}

export default SelectInputProps;
