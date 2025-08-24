import BaseSheetProps from './interface';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { Headline, LucideIcon } from '@/components/atoms';
import { Button, Pressable, View } from 'react-native';
import { useThemeStore } from '@/store/theme';
import { PropsWithChildren, useCallback, useEffect, useRef } from 'react';
import { Portal } from '@gorhom/portal';

const BaseSheet = ({
  testId,
  titleProps,
  hasCloseButton = true,
  hasSubmitButton = false,
  children,
  snapPoints,
  containerStyle,
  modalVisible,
  setModalVisible,
  onClose,
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
        snapPoints={Array.isArray(snapPoints) ? snapPoints : [snapPoints]}
        enablePanDownToClose={true}
        enableDynamicSizing={false}
        enableContentPanningGesture={true}
        index={modalVisible ? 0 : -1}
        style={[containerStyle, themedStyles.containerWrapper]}
        onClose={onCloseFn}
        backdropComponent={renderBackdrop}
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
            {hasSubmitButton && <Button title="Submit" />}
          </View>
        </BottomSheetView>
      </BottomSheet>
    </Portal>
  );
};

export default BaseSheet;
