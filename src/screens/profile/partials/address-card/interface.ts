import HeadlineProps from '@/components/atoms/typography/headline/interface';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';

interface AddressCardProps {
  testId: string;
  addressCodeProps: Omit<ParagraphProps, 'testId'>;
  addressDescProps: Omit<HeadlineProps, 'testId'>;
  isPrimaryAddress?: boolean;
  isFocused?: boolean;
}
export default AddressCardProps;
