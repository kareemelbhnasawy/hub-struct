import { useMemo, useState } from 'react';
import { I18nManager, View, Pressable } from 'react-native';
import styles from './styles';
import Page from '@/components/templates/page';
import { useThemeStore } from '@/store/theme';
import { useNavigation } from '@/hooks';
import { List, TextInput } from '@/components/molecules';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import { Headline, LucideIcon, Paragraph, Spacer } from '@/components/atoms';
import type { Covenant as CovenantType, CovenantDetailsParams } from './interface';
import useGetCovenants from '@/network/services/profile/get-covenants/get-covenants.hook';

const Covenant = () => {
    const screenTestId = 'covenants-screen';
    const { getThemedStyles } = useThemeStore();
    const themedStyles = getThemedStyles(styles);
    const { navigate } = useNavigation();
    const [search, setSearch] = useState('');
    const { data, isSuccess, isLoading } = useGetCovenants();

    const items: CovenantType[] = useMemo(() => {
        return (data?.covenants ?? []) as CovenantType[];
    }, [data]);

    // Filter by name/id
    const filtered = useMemo(() => {
        const searchText = search.trim().toLowerCase();
        if (!searchText) return items;
        return items.filter(
            d =>
                (d.covenantName && d.covenantName.toLowerCase().includes(searchText)) ||
                String(d.covenantId ?? '').toLowerCase().includes(searchText)
        );
    }, [search, items]);

    const handleNavigation = (item: CovenantType) => {
        navigate('CovenantDetails', { covenant: item } as CovenantDetailsParams);
    };

    const renderItem = ({ item }: { item: CovenantType }) => (
        <Pressable
            style={themedStyles.info}
            testID={`${screenTestId}-row-${item.covenantId}`}
            onPress={() => handleNavigation(item)}
        >
            <View>
                <Headline
                    size="xs"
                    weight="Medium"
                    text={item.covenantName ?? ''}
                    testId={`${screenTestId}-row-${item.covenantId}-title`}
                />
                <Paragraph
                    size="xl"
                    weight="Regular"
                    style={themedStyles.colorTertiary}
                    text={item.covenantId ?? ''}
                    testId={`${screenTestId}-row-${item.covenantId}-code`}
                />
            </View>
            <LucideIcon
                name={I18nManager.isRTL ? 'ChevronLeft' : 'ChevronRight'}
                size={24}
                color="foregroundTertiary"
                testId={`${screenTestId}-row-${item.covenantId}-chevron`}
            />
        </Pressable>
    );

    // Search & Count List Header
    const ListHeader = (
        <View style={themedStyles.container}>
            <Spacer space={26} />
            <TextInput
                trailingIconProps={{ name: 'Search', size: 24, color: 'textBrandPrimary' }}
                placeholder="profile.covenants.searchPlaceholder"
                value={search}
                onChangeText={setSearch}
                placeholderTextColor={themedStyles.colorTertiary.color}
            />
            <Spacer space={16} />
            {filtered.length > 0 && (
                <View style={themedStyles.countWrapper}>
                    <LucideIcon
                        isCircle
                        name="Box"
                        size={24}
                        containerStyle={themedStyles.iconDescriptiveOrange}
                        testId={`${screenTestId}-count-icon`}
                    />
                    <Headline
                        size="md"
                        weight="Medium"
                        text="profile.covenants.listTitle"
                        testId={`${screenTestId}-count-title`}
                    />
                    <Headline
                        size="md"
                        weight="Medium"
                        style={themedStyles.count}
                        testId={`${screenTestId}-count-number`}
                        text={`(${filtered.length})`}
                    />
                </View>
            )}
            <Spacer space={8} />
        </View>
    );

    return (
        <Page
            testId={screenTestId}
            hasHeader
            isLoading={isLoading}
            pageHeaderVariant={PageHeaderVariants.BackWithTitle}
            pageHeaderProps={{
                titleProps: { text: 'profile.covenants.title' },
                isTitleCentered: true,
            }}
        >
            <List<CovenantType>
                testId={screenTestId}
                data={isSuccess ? filtered : []}
                keyExtractor={(data) => String(data.covenantId ?? '')}
                renderItem={renderItem}
                ListHeaderComponent={ListHeader}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                spacerProps={{ isDivider: true, space: 0 }}
                emptyComponentProps={{
                    iconProps: {
                        name: 'Box',
                        color: 'foregroundQuinary',
                        size: 100,
                        strokeWidth: 1,
                    },
                    headlineProps: {
                        text: 'profile.covenants.emptyTitle',
                        size: 'xs',
                        weight: 'Semibold',
                    },
                    paragraphProps: (data && data.covenants && data.covenants.length == 0) ? {
                        text: 'profile.covenants.emptySubtitle',
                        size: 'xl',
                        weight: 'Regular',
                    } : {
                        text: ''
                    }
                }}
            />
        </Page>
    );
};

export default Covenant;
