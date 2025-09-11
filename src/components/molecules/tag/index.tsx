import { View } from 'react-native';
import { LucideIcon, Paragraph } from '@/components/atoms';
import TagProps from './interface';
import styles from './styles';
import { getIconSize } from './utils';
import { useThemeStore } from '@/store/theme';

const Tag = ({
  testId,
  size,
  hasIcon,
  icon = 'X',
  labelProps,
  valueProps,
  onPress,
  containerStyle,
}: TagProps) => {
  const { getThemedStyles } = useThemeStore();

  const themedStyles = getThemedStyles(styles);

  return (
    <View
      testID={`${testId}-tag`}
      style={[
        themedStyles.wrapper,
        themedStyles[size],
        themedStyles.hasGap,
        containerStyle,
      ]}>
      <Paragraph
        size="lg"
        weight='Medium'
        testId={`${testId}-tag-label`}
        {...labelProps}
        style={[themedStyles.text, labelProps.style]}
      />
      {valueProps && (
        <Paragraph
          testId={`${testId}-tag-value`}
          size="sm"
          {...valueProps}
          style={[themedStyles.text, valueProps.style]}
        />
      )}
      {hasIcon && (
        <LucideIcon
          testId={`${testId}-tag`}
          //TODO: wrap the icon add the onPress to the wrapper
          onPress={onPress}
          name={icon}
          color={'tagIcon'}
          size={getIconSize(size)}
        />
      )}
    </View>
  );
};

export default Tag;
