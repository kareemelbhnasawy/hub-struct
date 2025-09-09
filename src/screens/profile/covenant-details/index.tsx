import { View } from 'react-native';
import styles from './styles';
import Page from '@/components/templates/page';
import { useThemeStore } from '@/store/theme';
import { List } from '@/components/molecules';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import { Headline, Paragraph, Spacer } from '@/components/atoms';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '@/navigation/stacks/profile/types';
import { covenantDetailsDataHandler, DetailRow } from './constants';

type RouteProps = NativeStackScreenProps<ProfileStackParamList, 'CovenantDetails'>['route'];

const CovenantDetails = () => {
    const screenTestId = 'covenant-details-screen';
    const { getThemedStyles } = useThemeStore();
    const themedStyle = getThemedStyles(styles);
    const { params } = useRoute<RouteProps>();
    const { covenant } = params;
    const rows: DetailRow[] = covenantDetailsDataHandler(covenant);

    const renderItem = ({ item }: { item: DetailRow }) => (

        <View style={themedStyle.info}>
            <Paragraph
                text={item.label}
                size="xl"
                weight="Medium"
                testId={`basic-${item.id}-label`}
            />
            <Headline
                text={item.value}
                weight="Medium"
                size="2xs"
                testId={`basic-${item.id}-value`}
            />
        </View>
    );

    return (
        <Page
            testId={screenTestId}
            hasHeader
            isLoading={false}
            pageHeaderVariant={PageHeaderVariants.BackWithTitle}
            pageHeaderProps={{
                titleProps: { text: covenant.covenantName ?? 'profile.covenants.title' },
                isTitleCentered: true,
            }}
        >
            <Spacer space={26} />
            <List<DetailRow>
                testId={screenTestId}
                data={rows}
                keyExtractor={(it) => it.id}
                renderItem={renderItem}
                spacerProps={{ isDivider: true, space: 0 }}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
            />
        </Page>
    );
};

export default CovenantDetails;
