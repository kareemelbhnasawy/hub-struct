import LucideIconProps from '@/components/atoms/lucide-icon/interface';
import HeadlineProps from '@/components/atoms/typography/headline/interface';
import { RNStyle } from '@/types/themes';

type OmittedLucideIconProps = Omit<LucideIconProps, 'testId'>;

interface PageHeaderProps {
  startIcon?: OmittedLucideIconProps;
  titleProps?: Omit<HeadlineProps, 'testId'>;
  isTitleCentered?: boolean;
  endIcon?: OmittedLucideIconProps | OmittedLucideIconProps[];
  containerStyle?: RNStyle;
  testId: string;
  hasBackIcon?: boolean;
  fontColor?: string;
}

export default PageHeaderProps;
