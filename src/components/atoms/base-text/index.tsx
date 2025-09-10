import { Text } from 'react-native';
import BaseTextProps from './interface';
import { useTranslate } from '@/hooks';

const BaseText = ({
  testId,
  text,
  isTranslated = true,
  textProps,
  children,
  searchText,
  highlightStyle = { fontWeight: 'bold' },
  ...props
}: BaseTextProps) => {
  const { translate } = useTranslate();

  const renderHighlightedText = (content: string) => {
    if (!searchText || !content) return content;

    const parts = content.split(new RegExp(`(${searchText})`, 'gi'));
    return parts.map((part, index) => {
      const isMatch = part.toLowerCase() === searchText?.toLowerCase();
      return isMatch ? (
        <Text key={index} style={highlightStyle}>
          {part}
        </Text>
      ) : (
        part
      );
    });
  };

  const displayText = isTranslated ? translate(text, textProps) : text;

  return (
    <Text testID={`${testId}-text`} {...props}>
      {renderHighlightedText(displayText)}
      {children}
    </Text>
  );
};

export default BaseText;
