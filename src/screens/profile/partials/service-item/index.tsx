import { Headline, LucideIcon, Paragraph, Spacer } from '@/components/atoms';
import { useThemeStore } from '@/store/theme';
import { Pressable, View } from 'react-native';
import { styles } from './styles';
import { serviceItemProps } from './interface';

const ServiceItem = ({
    testId,
    hasForwardIcon = true,
    serviceName,
    serviceDescription,
    renderCustomTrailingIcon,
    onPress,
}: serviceItemProps) => {
    const { getThemedStyles } = useThemeStore();
    const themedStyles = getThemedStyles(styles);
    return (
        <>
            <Pressable style={themedStyles.listItemContainer} onPress={onPress}>
                <View>
                    <Headline
                        testId={`${testId}-headline`}
                        text={serviceName}
                        size="xs"
                        weight="Semibold"
                        style={themedStyles.textBrandTealParagraph}
                    />
                    <Spacer space={'xs'} />
                    <Paragraph
                        testId={`${testId}-paragraph`}
                        text={serviceDescription}
                        size="xl"
                        weight="Regular"
                        style={themedStyles.textDefaultParagraph}
                    />
                </View>
                {hasForwardIcon && !renderCustomTrailingIcon && (
                    <LucideIcon
                        testId={testId}
                        size={24}
                        name="ChevronRight"
                        isRTLMirrored
                        color='backgroundBlack' />
                )}
                {renderCustomTrailingIcon?.()}
            </Pressable>
            <Spacer space={0} isDivider />
        </>
    );
};

export default ServiceItem;