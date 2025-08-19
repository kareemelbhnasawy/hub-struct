import HeadlineProps from '@/components/atoms/typography/headline/interface';
import { ButtonProps, ModalProps } from 'react-native';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';

interface BaseModalProps extends ModalProps {
  testId: string;
  isVisible: boolean;
  titleProps?: HeadlineProps;
  paragraphProps?: ParagraphProps;
  filledButtonProps?: ButtonProps;
  outlinedButtonProps?: ButtonProps;
}

export default BaseModalProps;
