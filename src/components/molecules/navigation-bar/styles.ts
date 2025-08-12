import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    capsule: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 275,
        borderRadius: 99999,
        boxShadow: '0 4px 5px rgba(0, 0, 0, 0.02)',
    },
    circle: {
        width: 54,
        height: 54,
        borderRadius: 27,
        justifyContent: 'center',
        alignItems: 'center',
        marginInline: 5
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor:'transparent',
    },
    centerTab: {
        marginInline: -20
    },


});


