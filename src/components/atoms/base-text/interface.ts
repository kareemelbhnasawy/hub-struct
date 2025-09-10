import { TextProps } from 'react-native';

interface BaseTextProps extends Omit<TextProps, 'testID'> {
  testId: string;
  text: string;
  isTranslated?: boolean;
  textProps?: { [x: string]: string };
  searchText?: string;
  highlightStyle?: TextProps['style'];
}

export default BaseTextProps;
