import LucideIconProps from '@/components/atoms/lucide-icon/interface';
import HeadlineProps from '@/components/atoms/typography/headline/interface';

interface DescriptiveIconProps {
  testId: string;
  textProps: Omit<HeadlineProps, 'testId'>;
  iconProps: Omit<LucideIconProps, 'testId'>;
  isRow? : boolean
}

export default DescriptiveIconProps;
