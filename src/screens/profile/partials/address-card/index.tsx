import { useThemeStore } from '@/store/theme';
import AddressCardProps from './interface';
import { View } from 'react-native';
import styles from './styles';
import { Headline, LucideIcon, Paragraph, Spacer } from '@/components/atoms';
import { Badge } from '@/components/molecules';

const AddressCard = ({
  testId,
  addressCodeProps,
  addressDescProps,
  isPrimaryAddress,
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
            weight="Medium"
            size="xl"
            {...addressCodeProps}
          />
          <Spacer space="md" />
          {isPrimaryAddress && (
            <Badge
              testId={`${testId}-address-card`}
              paragraphProps={{ text: 'profile.contractAddress' }}
            />
          )}
        </View>
        <Spacer space="xs" />
        <Headline
          testId={`${testId}-address-card`}
          weight="Medium"
          size="2xs"
          {...addressDescProps}
        />
      </View>
      {isFocused && (
        <LucideIcon
          name="Check"
          testId={`${testId}-address-card`}
          color={getThemeColor('foregroundSuccess')}
        />
      )}
    </View>
  );
};

export default AddressCard;
