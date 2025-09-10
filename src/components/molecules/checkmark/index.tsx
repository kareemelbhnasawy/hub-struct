import { CheckmarkProps } from './interface';
import { Pressable, View } from 'react-native';
import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { useState } from 'react';
import { LucideIcon, Headline } from '@/components/atoms';

const Checkmark = ({
  testId,
  textProps,
  disabled,
  onCheck,
  onUncheck,
  checked,
  containerStyle,
}: CheckmarkProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [isClicked, setIsClicked] = useState(checked);

  const handlePress = () => {
    if (onCheck && !isClicked) {
      onCheck();
    }
    if (onUncheck && isClicked) {
      onUncheck();
    }
    setIsClicked(!isClicked);
  };

  return (
    <Pressable
      testID={`${testId}-checkmark`}
      style={[themedStyles.container, containerStyle]}
      onPress={!disabled ? handlePress : undefined}>
      <View style={[themedStyles.checkmark, isClicked && themedStyles.checked]}>
        {isClicked && (
          <LucideIcon
            name="Check"
            color="backgroundWhite"
            size={16}
            testId={testId}
          />
        )}
      </View>
      {textProps && (
        <Headline testId={testId} size="2xs" weight="Medium" {...textProps} />
      )}
    </Pressable>
  );
};

export default Checkmark;
