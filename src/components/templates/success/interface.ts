import LucideIconProps from '@/components/atoms/lucide-icon/interface';
import HeadlineProps from '@/components/atoms/typography/headline/interface';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';
import BaseButtonProps from '@/components/molecules/base-button/interface';

export interface SuccessScreenProps {
  iconProps: Omit<LucideIconProps, 'testId'>;
  headlineProps: Omit<HeadlineProps, 'testId'>;
  requestNumber?: string;
  paragraphProps?: Omit<ParagraphProps, 'testId'>;
  primaryButtonProps?: Omit<BaseButtonProps, 'testId'>;
  secondaryButtonProps?: Omit<BaseButtonProps, 'testId'>;
}
