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
}

export default ParagraphProps;
