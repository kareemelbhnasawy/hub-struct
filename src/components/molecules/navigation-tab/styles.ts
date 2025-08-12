import { getThemeColor } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 99999,
    },
    transparent: {
        backgroundColor: 'transparent',
    },
    iconBackgroundSelected: {
        backgroundColor: getThemeColor('iconBackgroundSelected'),
    },
    iconBackgroundDefault: {
        backgroundColor: getThemeColor('iconBackgroundDefault'),
    },
    text: {
        fontSize: 12,
    },
    blueIcon: {
        color: getThemeColor('iconBorderDefault'),
    },
    greenIcon: {
        color: getThemeColor('iconBorderSelected'),
    },
    whiteIcon: {
        color: getThemeColor('backgroundWhite'),
    }
});


