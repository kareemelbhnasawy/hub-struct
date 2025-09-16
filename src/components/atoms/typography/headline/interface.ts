import { ThemeColorKey } from '@/theme/theme-colors';
import BaseTextProps from '../../base-text/interface';

interface HeadlineProps extends BaseTextProps {
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs';
  weight?:
  | 'Thin'
  | 'Light'
  | 'Regular'
  | 'Medium'
  | 'Semibold'
  | 'Bold'
  | 'Title';
  color?: ThemeColorKey;
}

export default HeadlineProps;
