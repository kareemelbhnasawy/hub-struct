import { icons } from 'lucide-react-native';
import { ViewStyle, StyleProp } from 'react-native';

interface TagProps {
    testId: string,
    size: 'sm' | 'md' | 'lg';
    label: string;
    icon?: keyof typeof icons;
    value?: string;
    onPress?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
}

export default TagProps;
