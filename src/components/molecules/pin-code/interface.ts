import ParagraphProps from '@/components/atoms/typography/paragraph/interface';
import { RNStyle } from '@/types/themes';

export interface PinCodeProps {
  testId: string;
  pinLength?: number;
  onPinComplete: (arg0: string) => void;
  errorProps?: Omit<ParagraphProps, 'testId'>;
  disabled?: boolean;
  secureTextEntry?: boolean;
  onTyping?: () => void;
  containerStyle?: RNStyle;
}
