import BaseSheetProps from './interface';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { Headline, LucideIcon } from '@/components/atoms';
import { Pressable, View } from 'react-native';
import { useThemeStore } from '@/store/theme';
import { PropsWithChildren, useCallback, useEffect, useRef } from 'react';
import { Portal } from '@gorhom/portal';
import BaseButton from '../base-button';
import { SnapPoints } from './constants';

const BaseSheet = ({
  testId,
  titleProps,
  hasCloseButton = true,
  hasSubmitButton = false,
  children,
  snapPoints = SnapPoints.MD,
  containerStyle,
  modalVisible,
  setModalVisible,
  onClose,
  buttonProps,
  keyboardBehavior = 'extend',
  keyboardBlurBehavior = 'restore',
  enableBlurKeyboardOnGesture = true,
  android_keyboardInputMode = 'adjustResize',
  ...props
}: PropsWithChildren<BaseSheetProps>) => {
  const { getThemeColor, getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const sheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (!modalVisible) {
      sheetRef.current?.close();
    } else {
      sheetRef.current?.expand();
    }
  }, [modalVisible]);

  const onCloseFn = () => {
    setModalVisible(false);
    onClose?.();
  };

  const closeButton = (
    <Pressable
      testID={`${testId}-bottom-sheet-close-container`}
      onPress={onCloseFn}>
      <LucideIcon
        testId={`${testId}-bottom-sheet-close-icon`}
        name="X"
        color={getThemeColor('iconDefault')}
      />
    </Pressable>
  );

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.75}
        pressBehavior="close"
        {...props}
      />
    ),
    [],
  );

  return (
    <Portal>
      <BottomSheet
        ref={sheetRef}
        snapPoints={
          Array.isArray(snapPoints) ? snapPoints : [snapPoints, SnapPoints.LG]
        }
        enablePanDownToClose={true}
        enableContentPanningGesture={true}
        index={modalVisible ? 0 : -1}
        style={[containerStyle, themedStyles.containerWrapper]}
        onClose={onCloseFn}
        backdropComponent={renderBackdrop}
        keyboardBehavior={keyboardBehavior}
        keyboardBlurBehavior={keyboardBlurBehavior}
        enableBlurKeyboardOnGesture={enableBlurKeyboardOnGesture}
        android_keyboardInputMode={android_keyboardInputMode}
        {...props}>
        <BottomSheetView
          testID={`${testId}-bottom-sheet`}
          style={themedStyles.hasVerticalGap}>
          <View
            testID={`${testId}-bottom-sheet-header-container`}
            style={themedStyles.heading}>
            {titleProps && (
              <Headline
                testId={`${testId}-bottom-sheet-header`}
                {...titleProps}
              />
            )}
            {hasCloseButton && closeButton}
          </View>
          <View testID={`${testId}-bottom-sheet-body-container`}>
            {children}
          </View>

          {/* //TODO: replace with actual Button */}
          {/* //TODO: make place for 2 buttons instead of one */}
          <View testID={`${testId}-bottom-sheet-footer-container`}>
            {hasSubmitButton && <BaseButton {...buttonProps} />}
          </View>
        </BottomSheetView>
      </BottomSheet>
    </Portal>
  );
};

export default BaseSheet;
