import { getThemeColor } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 99999,
    },
    tab: {
        width: 95,
        height: 45,
    },
    newsTab: {
        width: 45,
        height: 45
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
    },
    centerTab: {
        marginInline: -10
    },
});


