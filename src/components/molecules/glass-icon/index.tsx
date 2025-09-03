import { useThemeStore } from '@/store/theme';
import GlassIconProps from './interface';
import { LucideIcon } from '@/components/atoms';
import styles from './styles';
import { GlassContainer } from '@/components/atoms/glass-container';

const GlassIcon = ({
  testId,
  glassContainerProps,
  onPress,
  ...iconProps
}: GlassIconProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  return (
    <GlassContainer
      testId={`${testId}-glass-icon`}
      containerStyle={themedStyles.aspect}
      onPress={onPress}
      {...glassContainerProps}>
      <LucideIcon testId={`${testId}-glass-icon`} {...iconProps} />
    </GlassContainer>
  );
};

export default GlassIcon;
