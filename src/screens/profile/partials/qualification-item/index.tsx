import { useThemeStore } from '@/store/theme';
import styles from './styles';
import { Pressable, View } from 'react-native';
import { Badge } from '@/components/molecules';
import { Headline, LucideIcon, Spacer } from '@/components/atoms';
import { QualificationItemProps } from './interface';
import { getBadgeDataFromStatus } from './utilities';

const QualificationItem = ({
  testId,
  qualificationName,
  institutionText,
  dateText,
  status,
  onPress,
}: QualificationItemProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const { color, text } = getBadgeDataFromStatus(status);
  return (
    <>
      <Pressable style={themedStyles.container} onPress={onPress}>
        <View style={themedStyles.badgeRow}>
          <Badge
            testId={`${testId}-badge`}
            size="lg"
            color={color}
            paragraphProps={{ text: text }}
          />
          <LucideIcon
            testId={`${testId}-chevron`}
            name="ChevronRight"
            color="foregroundQuaternary"
            size={20}
            isCircle
            containerStyle={themedStyles.chevronIconContainer}
            isRTLMirrored
          />
        </View>
        <Headline
          testId={`${testId}-headline`}
          text={qualificationName}
          size="xs"
          weight="Medium"
        />
        <View style={themedStyles.detailsRow}>
          <LucideIcon
            testId={`${testId}-Landmark`}
            name="Landmark"
            isCircle
            color="foregroundPrimary"
            containerStyle={themedStyles.iconContainer}
            size={10}
          />
          <Headline
            testId={`${testId}-headline`}
            text={institutionText}
            size="2xs"
            weight="Medium"
          />
        </View>
        <View style={themedStyles.detailsRow}>
          <LucideIcon
            testId={`${testId}-Date-Icon`}
            name="Calendar"
            isCircle
            color="foregroundPrimary"
            containerStyle={themedStyles.iconContainer}
            size={10}
          />
          <Headline
            testId={`${testId}-headline`}
            text={dateText}
            size="2xs"
            weight="Medium"
          />
        </View>
      </Pressable>
      <Spacer space={0} isDivider />
    </>
  );
};

export default QualificationItem;
