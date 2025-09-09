import { View } from 'react-native';
import styles from './styles';
import Page from '@/components/templates/page';
import { useThemeStore } from '@/store/theme';
import { List } from '@/components/molecules';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import { Headline, Paragraph, Spacer } from '@/components/atoms';

type DetailRow = { id: string; label: string; value: string };

const CovenantDetails = () => {
    const screenTestId = 'covenant-details-screen';
    const { getThemedStyles } = useThemeStore();
    const themedStyle = getThemedStyles(styles);

    // Mocked data
    const rows: DetailRow[] = [
        {
            id: 'number',
            label: 'profile.convenants.number',
            value: 'test'
        },
        {
            id: 'type',
            label: 'profile.convenants.type',
            value: 'test'
        },
        {
            id: 'registeredAt',
            label: 'profile.convenants.registeredAt',
            value: 'test'
        },
    ];

    const renderItem = ({ item }: { item: DetailRow }) => (

        <View style={themedStyle.info}>
            <Paragraph
                text={item.label}
                size="xl"
                weight="Medium"
                testId={`basic-${item.key}-label`}
            />
            <Headline
                text={item.value}
                weight="Medium"
                size="2xs"
                testId={`basic-${item.key}-value`}
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
                titleProps: { text: 'profile.convenants.title' },
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
