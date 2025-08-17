import BaseSheetProps from './interface';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { Headline, LucideIcon } from '@/components/atoms';
import { Button, Pressable, View } from 'react-native';
import { useThemeStore } from '@/store/theme';

const BaseSheet = ({
  testId,
  titleProps,
  hasCloseButton = true,
  hasSubmitButton = false,
  children,
  sheetRef,
  snapPoints,
  containerStyle,
  ...props
}: BaseSheetProps) => {
  const { getThemeColor, getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const closeButton = (
    <Pressable
      testID={`${testId}-bottom-sheet-close-container`}
      onPress={() => sheetRef.current?.snapToIndex(0)}>
      <LucideIcon
        testId={`${testId}-bottom-sheet-close-icon`}
        name="X"
        size={24}
        color={getThemeColor('iconDefault')}
      />
    </Pressable>
  );
  return (
    <BottomSheet
      ref={sheetRef}
      enablePanDownToClose={true}
      snapPoints={Array.isArray(snapPoints) ? snapPoints : [snapPoints]}
      enableDynamicSizing={true}
      style={[containerStyle, themedStyles.containerWrapper]}
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
        <View testID={`${testId}-bottom-sheet-body-container`}>{children}</View>

        {/* //TODO: replace with actual Button */}
        {/* //TODO: make place for 2 buttons instead of one */}
        <View testID={`${testId}-bottom-sheet-footer-container`}>
          {hasSubmitButton && <Button title="Submit" />}
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default BaseSheet;
