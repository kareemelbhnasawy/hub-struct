import { styles } from './styles';

export const findRelevantStyle = (isActive: boolean, isNews: boolean) => {
    return [
        isNews ? styles.newsTab : styles.tab,
        isActive ? styles.iconBackgroundSelected : styles.transparent
    ];
};

