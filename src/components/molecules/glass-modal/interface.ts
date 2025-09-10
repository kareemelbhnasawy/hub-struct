import BaseModalProps from '@/components/atoms/base-modal/interface';
import HeadlineProps from '@/components/atoms/typography/headline/interface';
import AlertButtonProps from '../alert-button/interface';

interface GlassModalProps extends BaseModalProps {
  headlineProps?: Omit<HeadlineProps, 'testId'>;
  paragraphProps?: Omit<HeadlineProps, 'testId'>;
  buttonProps?: Omit<AlertButtonProps, 'testId'>;
  dangerButtonProps?: Omit<AlertButtonProps, 'testId'>;
  secondaryButtonProps?: Omit<AlertButtonProps, 'testId'>;
}

export default GlassModalProps;
