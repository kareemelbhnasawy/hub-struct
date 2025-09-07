import { useThemeStore } from '@/store/theme';
import { styles } from './style';
import { Pressable, View } from 'react-native';
import { Avatar, Badge } from '@/components/molecules';
import { Headline, LucideIcon, Spacer } from '@/components/atoms';
import ProfileSettingItemProps from './interface';
import { getDataFromStatus } from './utilities';

const TeamMemberItem = ({
  testId,
  memberName,
  memberTitle,
  memberStatus,
  avatarImage,
  onPress,
}: ProfileSettingItemProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const { badgeText, badgeColor, iconName, iconColor } = getDataFromStatus(memberStatus ?? 'remote');
  return (
    <>
      <Pressable style={themedStyles.listItemContainer} onPress={onPress}>
        <View style={themedStyles.isRow}>
          <Avatar
            testId={`${testId}-avatar`}
            size="lg"
            image={avatarImage}
            name={memberName}
          />
          <View style={themedStyles.isColumn}>
            <Headline
              testId={`${testId}-text`}
              weight="Medium"
              size="xs"
              text={memberName}
            />
            <Headline
              testId={`${testId}-description`}
              weight="Medium"
              size="2xs"
              text={memberTitle}
            />
          </View>
        </View>
        <View style={themedStyles.isRow}>
          {memberStatus && (
            <Badge
              testId={`${testId}-badge`}
              size="md"
              color={badgeColor}
              iconProps={{
                name: iconName,
                color: iconColor,
              }}
              paragraphProps={badgeText}
            />
          )}
          <LucideIcon
            testId={`${testId}-chevron`}
            name="ChevronLeft"
            size={20}
          />
        </View>
      </Pressable>
      <Spacer space={0} isDivider />
    </>
  );
};

export default TeamMemberItem;
