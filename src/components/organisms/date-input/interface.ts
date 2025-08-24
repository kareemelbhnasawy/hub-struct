import { InputContainerProps } from '@/components/molecules/input-container/interface';
import { RNStyle } from '@/types/themes';

// TODO: extends date modal
interface DateInputProps
  extends Omit<InputContainerProps, 'trailingIconProps'> {
  style?: RNStyle;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  placeholderProps?: { [x: string]: string };
  onChangeValue?: () => string;
  value?: string;
}

export default DateInputProps;
