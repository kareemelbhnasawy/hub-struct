import BaseText from '../../base-text';
import ParagraphProps from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';

/**
 * This is the Text in Figma, but we are using it as Paragraph in the app
 */
const Paragraph = ({
  testId,
  size = 'md',
  weight = 'Regular',
  color = 'textPrimary',
  ...props
}: ParagraphProps) => {
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  return (
    <BaseText
      testId={`${testId}-paragraph`}
      {...props}
      style={[
        themedStyles.paragraph,
        themedStyles[size],
        themedStyles[weight],
        { color: getThemeColor(color) },
        props.style,
      ]} // add style here to allow for appending styles without breaking previous ones
    />
  );
};

export default Paragraph;
