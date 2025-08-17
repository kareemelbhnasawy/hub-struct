import HeadlineProps from '@/components/atoms/typography/headline/interface';
import BottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet';
import { StyleProp, ViewStyle } from 'react-native';
import { SnapPoints } from './utils';
interface BaseSheetProps extends Omit<BottomSheetProps, 'snapPoints'> {
    testId: string;
    children: React.ReactNode;
    sheetRef: React.RefObject<BottomSheet | null>;
    snapPoints: SnapPoints[] | SnapPoints;
    titleProps?: Omit<HeadlineProps, 'testId'>;
    hasCloseButton?: boolean;
    hasSubmitButton?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
}

export default BaseSheetProps;