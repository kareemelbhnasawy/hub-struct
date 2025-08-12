import { icons } from 'lucide-react-native';

export interface TagProps {
    testId: string,
    size: 'small' | 'medium' | 'large';
    label: string;
    icon?: keyof typeof icons;
    value?: string;
}
