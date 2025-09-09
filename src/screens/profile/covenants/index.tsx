import { useMemo, useState } from 'react';
import { I18nManager, View, Pressable } from 'react-native';
import styles from './styles';
import Page from '@/components/templates/page';
import { useThemeStore } from '@/store/theme';
import { List, TextInput } from '@/components/molecules';
import { PageHeaderVariants } from '@/components/templates/page/constants';
import { Headline, LucideIcon, Paragraph, Spacer } from '@/components/atoms';
import { CovenantItem } from './interface';

const Convenant = () => {
    const screenTestId = 'convenants-screen';
    const { getThemedStyles } = useThemeStore();
    const themedStyles = getThemedStyles(styles);
    const [search, setSearch] = useState('');

    const data: CovenantItem[] = [
        { id: '1', title: 'هاتف سامسونج', code: '01212712' },
        { id: '2', title: 'لاب توب ماك', code: '01212798' },
        { id: '3', title: 'جهاز بروجيكتور', code: '01212798' },
        { id: '4', title: 'تليفزيون سامسونج ديچيتال', code: '01212798' },
        { id: '5', title: 'Surface لاب توب ويندوز', code: '01212791' },
        { id: '6', title: 'Surface لاب توب ويندوز', code: '012127888' },
        { id: '7', title: 'Surface لاب توب ويندوز', code: '012127261' },
        { id: '8', title: 'Surface لاب توب ويندوز', code: '01212798' },
    ];

    // Navigation to details screen
    // const handleNavigation = (id: string) => { };

    // Filtering the data based on search input
    const filtered = useMemo(() => {
        const searchText = search.trim().toLowerCase();
        if (!searchText) return data;
        return data.filter(
            d =>
                (d.title && d.title.toLowerCase().includes(searchText)) ||
                (d.code && d.code.toLowerCase().includes(searchText))
        );
    }, [search, data]);

    const renderItem = ({ item }: { item: CovenantItem }) => (
        <Pressable
            style={themedStyles.info}
            testID={`${screenTestId}-row-${item.id}`}
        // onPress={() => handleNavigation(item.id)}
        >
            <View>
                <Headline size="xs" weight="Medium" text={item.title ?? ''} testId={`${screenTestId}-row-${item.id}-title`} />
                <Paragraph size="xl" weight='Regular' testId={`${screenTestId}-row-${item.id}-code`} style={themedStyles.colorTertiary} text={item.code ?? ''} />
            </View>
            <LucideIcon
                name={I18nManager.isRTL ? 'ChevronLeft' : 'ChevronRight'}
                size={24}
                color="foregroundTertiary"
                testId={`${screenTestId}-row-${item.id}-chevron`}
            />
        </Pressable>
    );

    // Search & Count List Header
    const ListHeader = (
        <View style={themedStyles.container}>
            <Spacer space={26} />
            <TextInput
                trailingIconProps={{ name: 'Search', size: 24, color: 'textBrandPrimary' }}
                placeholder='profile.convenants.searchPlaceholder'
                value={search}
                onChangeText={setSearch}
                placeholderTextColor={themedStyles.colorTertiary.color}
            />
            <Spacer space={16} />
            {filtered.length > 0 && (
                <View style={themedStyles.countWrapper}>
                    <LucideIcon isCircle name="Box" size={24} containerStyle={themedStyles.iconDescriptiveOrange} testId={`${screenTestId}-count-icon`} />
                    <Headline size="md" weight='Medium' text="profile.convenants.listTitle" testId={`${screenTestId}-count-title`} />
                    <Headline size="md" weight='Medium' style={themedStyles.count} testId={`${screenTestId}-count-number`} text={`(${filtered.length})`} />
                </View>
            )}
            <Spacer space={8} />
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
            <List<CovenantItem>
                testId={screenTestId}
                data={filtered}
                keyExtractor={it => it.id ?? ''}
                renderItem={renderItem}
                ListHeaderComponent={data.length > 0 ? ListHeader : null}
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
                        text: 'profile.convenants.emptyTitle',
                        size: 'xs',
                        weight: 'Semibold',
                    },
                    paragraphProps: {
                        text: 'profile.convenants.emptySubtitle',
                        size: 'xl',
                        weight: 'Regular',
                    },
                }}
            />
        </Page>
    );
};

export default Convenant;
