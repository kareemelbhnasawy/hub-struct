import LucideIconProps from '@/components/atoms/lucide-icon/interface';
import HeadlineProps from '@/components/atoms/typography/headline/interface';

type OmittedLucideIconProps = Omit<LucideIconProps, 'testId'>;

interface PageHeaderProps {
  startIcon?: OmittedLucideIconProps;
  titleProps?: Omit<HeadlineProps, 'testId'>;
  isTitleCentered?: boolean;
  endIcon?: OmittedLucideIconProps | OmittedLucideIconProps[];
  testId: string;
  hasBackIcon?: boolean;
}

export default PageHeaderProps;
