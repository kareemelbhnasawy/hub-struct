import ParagraphProps from '@/components/atoms/typography/paragraph/interface';

interface FormInfoCardProps {
  testId: string;
  labelProps: Omit<ParagraphProps, 'testId'>;
  value: string;
}

export default FormInfoCardProps;
