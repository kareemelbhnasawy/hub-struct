import ParagraphProps from '@/components/atoms/typography/paragraph/interface';
import { icons } from 'lucide-react-native';
import { ViewStyle, StyleProp } from 'react-native';

interface TagProps {
    testId: string,
    size: 'sm' | 'md' | 'lg';
    label: string;
    hasIcon: boolean;
    labelProps: ParagraphProps;
    valueProps?: ParagraphProps;
    icon?: keyof typeof icons;
    onPress?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
}

export default TagProps;
