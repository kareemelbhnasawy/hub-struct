import { useThemeStore } from '@/store/theme';
import { styles } from './style';
import { Pressable } from 'react-native';
import { DescriptiveIcon } from '@/components/molecules';
import { LucideIcon, Spacer } from '@/components/atoms';
import ListItemProps from './interface';

const ProfileSettingItem = ({
  testId,
  textProps,
  iconProps,
  onPress,
}: ListItemProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  return (
    <>
      <Pressable style={themedStyles.listItemContainer} onPress={onPress}>
        <DescriptiveIcon
          iconProps={{
            size: 18,
            isCircle: true,
            ...iconProps,
          }}
          textProps={{
            weight: 'Semibold',
            size: '2xs',
            ...textProps,
          }}
          testId={testId}
        />
        <LucideIcon
          testId={testId}
          name="ChevronRight"
          isRTLMirrored
          size={24}
        />
      </Pressable>
      <Spacer space={0} isDivider />
    </>
  );
};

export default ProfileSettingItem;
