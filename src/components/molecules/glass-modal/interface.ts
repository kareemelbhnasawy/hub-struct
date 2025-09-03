import BaseModalProps from '@/components/atoms/base-modal/interface';
import HeadlineProps from '@/components/atoms/typography/headline/interface';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';
import BaseButtonProps from '../base-button/interface';

interface GlassModalProps extends BaseModalProps {
  headlineProps?: Omit<HeadlineProps, 'testId'>;
  paragraphProps?: Omit<ParagraphProps, 'testId'>;
  buttonProps?: Omit<BaseButtonProps, 'testId'>;
  secondaryButtonProps?: Omit<BaseButtonProps, 'testId'>;
}

export default GlassModalProps;
