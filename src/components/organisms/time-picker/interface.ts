import { ThemeColorKey } from '@/theme/theme-colors';
import { InputContainerProps } from '@/components/molecules/input-container/interface';
import BaseSheetProps from '@/components/molecules/base-sheet/interface';

export interface TimeValue {
  hour: number;
  minute: number;
  second: number;
}

export interface TimePickerProps extends Omit<InputContainerProps, 'onPressContainer' | 'trailingIconProps'> {
  testId: string;
  value?: TimeValue;
  placeholder?: string;
  placeholderColor?: ThemeColorKey;
  onChangeValue?: (time: TimeValue) => void;
  disabled?: boolean;
  modalProps?: Omit<BaseSheetProps, 'testId' | 'modalVisible' | 'setModalVisible' | 'children'>;
  is24Hour?: boolean; // For future use if needed
  showHours?: boolean; // Whether to show hours column
  showMinutes?: boolean; // Whether to show minutes column  
  showSeconds?: boolean; // Whether to show seconds column
}

export default TimePickerProps;
