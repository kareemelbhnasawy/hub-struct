import { useThemeStore } from '@/store/theme';
import AddressCardProps from './interface';
import { View } from 'react-native';
import styles from './styles';
import { Headline, LucideIcon, Paragraph, Spacer } from '@/components/atoms';
import { Badge } from '@/components/molecules';

const AddressCard = ({
  testId,
  addressId,
  addressDesc,
  badgeText,
  isFocused,
}: AddressCardProps) => {
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  return (
    <View
      testID={`${testId}-address-card`}
      style={[
        themedStyles.cardContainer,
        isFocused && themedStyles.cardContainerFocused,
      ]}>
      <View>
        <View style={themedStyles.centerRow}>
          <Paragraph
            testId={`${testId}-address-card`}
            text={addressId}
            weight="Medium"
            size="xl"
          />
          <Spacer space="md" />
          {badgeText && (
            <Badge
              testId={`${testId}-address-card`}
              paragraphProps={{ text: badgeText }}
            />
          )}
        </View>
        <Spacer space="xs" />
        <Headline
          testId={`${testId}-address-card`}
          text={addressDesc}
          weight="Medium"
          size="2xs"
        />
      </View>
      {isFocused && (
        <LucideIcon
          name="Check"
          testId={`${testId}-address-card`}
          color={getThemeColor('iconSuccessRing')}
        />
      )}
    </View>
  );
};

export default AddressCard;
