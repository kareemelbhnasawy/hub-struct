import { responsiveHandler } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: responsiveHandler({
        base: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-start',
            width: 'auto',
            backgroundColor: 'tagBackground',
            borderColor: 'tagBorder',
            borderWidth: 0.5,
            borderRadius: 10,
        }
    }),
    small: responsiveHandler({
        base: {
            height: 23,
            borderRadius: 6,
            paddingBlock: 5,
            paddingInline: 15,
        },
    }),
    medium: responsiveHandler({
        base: {
            height: 28,
            borderRadius: 8,
            paddingBlock: 5,
            paddingInline: 17
        },
    }),
    large: responsiveHandler({
        base: {
            height: 36,
            borderRadius: 10,
            paddingBlock: 10,
            paddingInline: 20
        }
    }),
    text: responsiveHandler({
        base: {
            color: 'tagLabel',
        }
    }),
    smallText: responsiveHandler({
        base: {
            fontSize: 12,
        }
    }),
    mediumText: responsiveHandler({
        base: {
            fontSize: 14,
        }
    }),
    largeText: responsiveHandler({
        base: {
            fontSize: 16,
        }
    }),
    hasMarginEnd: responsiveHandler({
        base: {
            marginEnd: 15
        }
    }),
});
