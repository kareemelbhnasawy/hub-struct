import LucideIconProps from '@/components/atoms/lucide-icon/interface';
import HeadlineProps from '@/components/atoms/typography/headline/interface';

interface ListItemProps {
  testId: string;
  textProps: Omit<HeadlineProps, 'testId'>;
  iconProps: Omit<LucideIconProps, 'testId'>;
  onPress: () => void;
}

export default ListItemProps;
