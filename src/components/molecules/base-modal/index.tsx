import { Headline, Paragraph } from '@/components/atoms';
import { styles } from './styles';
import { Button, Modal, View } from 'react-native';
import BaseModalProps from './interface';
import { useThemeStore } from '@/store/theme';

const BaseModal = ({
  testId,
  isVisible,
  titleProps,
  paragraphProps,
  filledButtonProps,
  outlinedButtonProps,
  ...props
}: BaseModalProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  return (
    <Modal
      testID={`${testId}-modal`}
      visible={isVisible}
      transparent
      animationType="fade"
      {...props}>
      <View style={themedStyles.overlay}>
        <View style={themedStyles.container}>
          {titleProps && (
            <Headline {...titleProps} testId={`${testId}-modal-header`} />
          )}
          {paragraphProps && (
            <Paragraph
              {...paragraphProps}
              testId={`${testId}-modal-paragraph`}
            />
          )}
          {/* TODO: REPLACE WITH ACTUAL BUTTONS  & ADD TEST ID*/}
          {filledButtonProps && (
            <Button {...filledButtonProps} title="Press ME" />
          )}
          {outlinedButtonProps && (
            <Button {...outlinedButtonProps} title="Press ME" />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default BaseModal;
