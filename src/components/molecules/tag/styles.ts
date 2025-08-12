import { getThemeColor } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        width: 'auto',
        backgroundColor: getThemeColor('tagBackground'),
        borderColor: getThemeColor('tagBorder'),
        borderWidth: 0.5,
        borderRadius: 10,
    },
    small: {
        height: 30,
        borderRadius: 6,
        paddingBlock: 5,
        paddingInline: 15,

    },
    medium: {
        height: 40,
        borderRadius: 8,
        paddingBlock: 5,
        paddingInline: 17
    },
    large: {
        height: 50,
        borderRadius: 10,  
        paddingBlock: 10,
        paddingInline: 20
    },
    text: {
        color: getThemeColor('tagLabel'),
    },
     smallText: {
        fontSize: 12,
    },
    mediumText: {
        fontSize: 14,
    },
    largeText: {
        fontSize: 16,
    },
    hasMarginRight: {
        marginRight: 15
    }
});
