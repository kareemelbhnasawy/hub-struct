import { getThemeColor } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    capsule: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 9999,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: getThemeColor('backgroundMenu'),
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor:'transparent',
    }
});


