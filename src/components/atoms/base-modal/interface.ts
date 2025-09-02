import { ModalProps } from 'react-native';

interface BaseModalProps extends Omit<ModalProps, 'testID'> {
  testId: string;
}

export default BaseModalProps;
