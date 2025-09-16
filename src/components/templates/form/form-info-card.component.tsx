import { View } from 'react-native';
import { Headline, Paragraph, Spacer } from '@/components/atoms';
import { useThemeStore } from '@/store/theme';
import { styles } from './styles';
import FormInfoCardProps from './interface';

const FormInfoCard = ({
  testId,
  labelProps,
  value,
}: FormInfoCardProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  return (
    <>
      <View style={themedStyles.listItemContainer}>
        <Paragraph testId={`${testId}-label`}
          size='xl'
          weight='Medium'
          color='textSecondary'
          {...labelProps}
        />
        <Headline testId={`${testId}-value`}
          text={value}
          isTranslated={false}
          size='2xs'
          weight='Medium'
          color='textBrandPrimary'
        />
      </View>
      <Spacer space={0} isDivider />
    </>
  );
};

export default FormInfoCard;
