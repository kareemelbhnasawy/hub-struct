import HeadlineProps from '@/components/atoms/typography/headline/interface';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';
import { RNStyle } from '@/types/themes';
import { icons } from 'lucide-react-native';

export type StatIntent =
  | 'success'
  | 'error'
  | 'brand'
  | 'warning'
  | 'info'
  | 'gray';

interface StatCardProps {
  testId: string;
  titleProps: Omit<ParagraphProps, 'testId'>;
  valueProps?: Omit<HeadlineProps, 'testId'>;
  value: string | number;
  iconName: keyof typeof icons;
  intent?: StatIntent;
  containerStyle?: RNStyle;
}

export default StatCardProps;
