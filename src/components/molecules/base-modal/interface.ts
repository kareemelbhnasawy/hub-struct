import HeadlineProps from '@/components/atoms/typography/headline/interface';
import { ButtonProps } from 'react-native';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';

interface BaseModalProps {
  testId: string;
  isVisible: boolean;
  titleProps?: HeadlineProps;
  paragraphProps?: ParagraphProps;
  filledButtonProps?: ButtonProps;
  outlinedButtonProps?: ButtonProps;
}

export default BaseModalProps;
