import { Modal } from 'react-native';
import BaseModalProps from './interface';
import { PropsWithChildren } from 'react';

const BaseModal = ({
  testId,
  children,
  ...props
}: PropsWithChildren<BaseModalProps>) => {
  return (
    <Modal testID={`${testId}-base-modal`} {...props}>
      {children}
    </Modal>
  );
};

export default BaseModal;
