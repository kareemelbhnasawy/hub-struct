import BaseText from '../../base-text';
import HeadlineProps from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';

/**
 * This is the Display component in Figma, but we are using it as Headline in the app
 */
const Headline = ({
  testId,
  size = 'md',
  weight = 'Regular',
  color = 'textPrimary',
  ...props
}: HeadlineProps) => {
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  return (
    <BaseText
      testId={`${testId}-headline`}
      {...props}
      style={[
        themedStyles.headline,
        themedStyles[size],
        themedStyles[weight],
        { color: getThemeColor(color) },
        props.style,
      ]} // add style here to allow for appending styles without breaking previous ones
    />
  );
};

export default Headline;
