import React from 'react';
import BaseSheetProps from './interface';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { Headline, LucideIcon } from '@/components/atoms';
import { Button, Pressable, View } from 'react-native';
import { getThemeColor } from '@/theme/theme-colors';

const BaseSheet: React.FC<BaseSheetProps> = ({
  titleProps,
  hasCloseButton = true,
  hasSubmitButton = false,
  children,
  sheetRef,
  snapPoints,
  containerStyle,
}) => {
  const closeButton = (
    <Pressable onPress={() => sheetRef.current?.snapToIndex(0)}>
      <LucideIcon name="X" size={24} color={getThemeColor('iconDefault')} />
    </Pressable>
  );
  return (
    <BottomSheet
      ref={sheetRef}
      enablePanDownToClose={true}
      snapPoints={Array.isArray(snapPoints) ? snapPoints : [snapPoints]}
      enableDynamicSizing={true}
      style={[containerStyle, styles.containerWrapper]}>
      <BottomSheetView style={styles.hasVerticalGap}>
        <View style={styles.heading}>
          {titleProps && <Headline {...titleProps} />}
          {hasCloseButton && closeButton}
        </View>
        <View>{children}</View>

        {/* //TODO: replace with actual Button */}
        {/* //TODO: make place for 2 buttons instead of one */}
        <View>{hasSubmitButton && <Button title="Submit" />}</View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default BaseSheet;
