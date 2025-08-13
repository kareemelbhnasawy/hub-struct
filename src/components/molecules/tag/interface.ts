import { icons } from 'lucide-react-native';
import { ViewStyle, StyleProp } from 'react-native';

interface TagProps {
    testId: string,
    size: 'small' | 'medium' | 'large';
    label: string;
    icon?: keyof typeof icons;
    value?: string;
    containerStyle?: StyleProp<ViewStyle>;
}

export default TagProps;
