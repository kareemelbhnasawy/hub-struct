import BaseSheetProps from './interface';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { Headline, LucideIcon, Spacer } from '@/components/atoms';
import { Keyboard, Pressable, View } from 'react-native';
import { useThemeStore } from '@/store/theme';
import { PropsWithChildren, useCallback, useEffect, useRef } from 'react';
import { Portal } from '@gorhom/portal';
import BaseButton from '../base-button';
import { SnapPoints } from './constants';

// Helper to get next larger snapPoint from SnapPoints enum
// const snapPointOrder = [
//   SnapPoints.SM,
//   SnapPoints.MD,
//   SnapPoints.LG,
//   SnapPoints.XL,
//   SnapPoints.FULL,
// ];
// const getSnapPoints = (snapPoint: string | string[]) => {
//   if (Array.isArray(snapPoint)) return snapPoint;
//   const idx = snapPointOrder.indexOf(snapPoint as SnapPoints);
//   const next = snapPointOrder[Math.min(idx + 1, snapPointOrder.length - 1)];
//   return [snapPoint, next];
// };

const BaseSheet = ({
  testId,
  titleProps,
  hasCloseButton = true,
  hasSubmitButton = false,
  children,
  snapPoints = SnapPoints.MD,
  containerStyle,
  contentContainerStyle,
  modalVisible,
  setModalVisible,
  onClose,
  buttonProps,
  keyboardBehavior = 'interactive',
  keyboardBlurBehavior = 'restore',
  enableBlurKeyboardOnGesture = true,
  android_keyboardInputMode = 'adjustPan',
  headerVariant = 'default',
  ...props
}: PropsWithChildren<BaseSheetProps>) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const sheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (!modalVisible) {
      sheetRef.current?.close();
      Keyboard.dismiss();
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
        color="foregroundQuaternary"
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

  const renderHeader = () => {
    switch (headerVariant) {
      case 'centerWithClose':
        return (
          <View style={themedStyles.headerCenterWithClose}>
            {titleProps && (
              <Headline
                testId={`${testId}-bottom-sheet-header`}
                {...titleProps}
                style={titleProps?.style}
              />
            )}
            {hasCloseButton && (
              <View style={themedStyles.closeButtonAbsolute}>
                {closeButton}
              </View>
            )}
          </View>
        );
      case 'center':
        return (
          <View style={themedStyles.headerCenter}>
            {titleProps && (
              <Headline
                testId={`${testId}-bottom-sheet-header`}
                {...titleProps}
                style={titleProps?.style}
              />
            )}
          </View>
        );
      case 'default':
      default:
        return (
          <View style={themedStyles.heading}>
            {titleProps && (
              <Headline
                testId={`${testId}-bottom-sheet-header`}
                {...titleProps}
              />
            )}
            {hasCloseButton && closeButton}
          </View>
        );
    }
  };

  if (!modalVisible) return null;

  return (
    <Portal>
      <BottomSheet
        ref={sheetRef}
        snapPoints={typeof snapPoints != 'string' ? snapPoints : [snapPoints]}
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
        // eslint-disable-next-line react-native/no-inline-styles
        handleIndicatorStyle={{ backgroundColor: '#CFCFCF' }}
        {...props}>
        <BottomSheetView
          testID={`${testId}-bottom-sheet`}
          style={[themedStyles.bottomSheetContainer, contentContainerStyle]}>
          {renderHeader()}
          <View testID={`${testId}-bottom-sheet-body-container`}>
            {children}
          </View>

          {/* //TODO: replace with actual Button */}
          {/* //TODO: make place for 2 buttons instead of one */}
          <View
            style={themedStyles.marginTopAuto}
            testID={`${testId}-bottom-sheet-footer-container`}>
            {hasSubmitButton && (
              <BaseButton
                testId={`${testId}-submit-btn`}
                textProps={{ text: 'common.defaultSubmit' }}
                size="lg"
                {...buttonProps}
                // disabled={submitButtonProps?.disabled || !props.isValid}
              />
            )}
          </View>
          <Spacer space={24} />
        </BottomSheetView>
      </BottomSheet>
    </Portal>
  );
};

export default BaseSheet;
