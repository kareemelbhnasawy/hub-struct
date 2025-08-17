import DisplayProps from '@/components/atoms/typography/headline/interface';
import BottomSheet from '@gorhom/bottom-sheet';
import { StyleProp, ViewStyle } from 'react-native';

interface BaseSheetProps {
    testId: string;
    children: React.ReactNode;
    sheetRef: React.RefObject<BottomSheet | null>;
    snapPoints: string[] | string;
    titleProps?: DisplayProps;
    hasCloseButton?: boolean;
    hasSubmitButton?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
}

export default BaseSheetProps;