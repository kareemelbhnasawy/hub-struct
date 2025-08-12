import { styles } from './styles';

export const findRelevantStyle = (isActive: boolean, isNews: boolean) => {
    if (isNews) {
        return isActive ? styles.transparent : styles.iconBackgroundDefault;
    }
    return isActive ? styles.iconBackgroundSelected : styles.transparent;
};

