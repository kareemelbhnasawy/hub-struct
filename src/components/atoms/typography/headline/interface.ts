import BaseTextProps from '../../base-text/interface';

interface DisplayProps extends BaseTextProps {
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs';
  weight?:
    | 'Thin'
    | 'Light'
    | 'Regular'
    | 'Medium'
    | 'Semibold'
    | 'Bold'
    | 'Title';
}

export default DisplayProps;
