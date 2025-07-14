import { TextProps } from 'react-native';

interface BaseTextProps extends TextProps {
  isTranslated?: boolean;
  textProps?: any;
}

export default BaseTextProps;
