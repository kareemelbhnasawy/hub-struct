import HeadlineProps from '@/components/atoms/typography/headline/interface';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';
import BadgeProps from '@/components/molecules/badge/interface';

interface AddressCardProps {
  testId: string;
  addressIdProps: Omit<ParagraphProps, 'testId'>;
  addressDescProps: Omit<HeadlineProps, 'testId'>;
  badgeProps?: Omit<BadgeProps, 'testId'>;
  isFocused?: boolean;
}
export default AddressCardProps;
