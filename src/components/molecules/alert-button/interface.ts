import { PressableProps } from 'react-native';
import HeadlineProps from '@/components/atoms/typography/headline/interface';

type variants = 'primary' | 'secondary' | 'destructive';

interface AlertButtonProps extends PressableProps {
  testId: string;
  textProps: Omit<HeadlineProps, 'testId'>;
  disabled?: boolean;
  variant?: variants;
}

export default AlertButtonProps;
