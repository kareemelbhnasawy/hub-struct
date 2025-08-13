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
    sm: responsiveHandler({
        base: {
            height: 23,
            borderRadius: 6,
            paddingVertical: 5,
            paddingHorizontal: 15,
        },
    }),
    md: responsiveHandler({
        base: {
            height: 28,
            borderRadius: 8,
            paddingVertical: 5,
            paddingHorizontal: 17
        },
    }),
    lg: responsiveHandler({
        base: {
            height: 36,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 20
        }
    }),
    text: responsiveHandler({
        base: {
            color: 'tagLabel',
        }
    }),
    hasMarginEnd: responsiveHandler({
        base: {
            marginEnd: 15
        }
    }),
});
