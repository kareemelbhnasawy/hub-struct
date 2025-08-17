import LucideIconProps from '@/components/atoms/lucide-icon/interface';
import HeadlineProps from '@/components/atoms/typography/headline/interface';

interface PageHeaderProps {
  startIcon?: LucideIconProps;
  titleProps?: HeadlineProps;
  isTitleCentered?: boolean;
  endIcon?: LucideIconProps | LucideIconProps[];
  testId: string;
  hasStartIcon?: boolean;
}

export default PageHeaderProps;
