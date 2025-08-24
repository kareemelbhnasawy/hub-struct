import HeadlineProps from '@/components/atoms/typography/headline/interface';
import { BottomSheetProps } from '@gorhom/bottom-sheet';
import { SnapPoints } from './constants';
import { RNStyle } from '@/types/themes';

interface BaseSheetProps
  extends Omit<BottomSheetProps, 'snapPoints' | 'children'> {
  testId: string;
  snapPoints: SnapPoints[] | SnapPoints;
  titleProps?: Omit<HeadlineProps, 'testId'>;
  hasCloseButton?: boolean;
  hasSubmitButton?: boolean;
  containerStyle?: RNStyle;
  modalVisible: boolean;
  setModalVisible: (arg0: boolean) => void;
}

export default BaseSheetProps;
