import { LucideIcon } from '@/components/atoms';
import { GlassContainer } from '@/components/atoms/glass-container';
import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { GlassIconProps } from './interface';
import { Pressable } from 'react-native-gesture-handler';

const GlassIcon = ({ testId, name, onPress }: GlassIconProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  return (
    <Pressable onPress={onPress}>
      <GlassContainer
        testId={`${testId}-glass-icon-wrapper`}
        containerStyle={themedStyles.container}>
        <LucideIcon testId={`${testId}-glass-icon`} name={name} size={24} />
      </GlassContainer>
    </Pressable>
  );
};

export default GlassIcon;
