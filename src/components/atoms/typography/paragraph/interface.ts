import { ThemeColorKey } from '@/theme/theme-colors';
import BaseTextProps from '../../base-text/interface';

interface ParagraphProps extends BaseTextProps {
  size?: 'xl' | 'lg' | 'md' | 'sm';
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

export default ParagraphProps;
