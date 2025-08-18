import LucideIconProps from '@/components/atoms/lucide-icon/interface';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';

interface DescriptiveIconProps {
  testId: string;
  textProps: Omit<ParagraphProps, 'testId'>;
  iconProps: Omit<LucideIconProps, 'testId'>;
}

export default DescriptiveIconProps;
