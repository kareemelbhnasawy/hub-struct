import BaseTextProps from '@/components/atoms/base-text/interface';
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
    labelProps?: BaseTextProps;
}

export default TagProps;
