import { forwardRef } from 'react';
import { TextInput } from 'react-native';
import BaseTextInputProps from './interface';
import { useTranslate } from '@/hooks';
import styles from '../typography/headline/styles';
import { useThemeStore } from '@/store/theme';
import { fontWeights } from '@/theme/theme-fonts';
import { getFont } from '@/utilities';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

// using forward ref to use it in the pin code so i can focus and blur next and previous inputs
// eslint-disable-next-line react/display-name
const BaseTextInput = forwardRef(
  (
    {
      testId,
      placeholder,
      placeholderProps,
      onChangeValue,
      style,
      inBottomSheet = false,
      ...textInputProps
    }: BaseTextInputProps,
    ref,
  ) => {
    const { translate, isRTL } = useTranslate();
    const { getThemeColor, getThemedStyles } = useThemeStore();
    const themedStyles = getThemedStyles(styles);
    const Comp = inBottomSheet ? BottomSheetTextInput : TextInput;
    return (
      <Comp
        ref={ref}
        testID={`${testId}-base-input`}
        textAlign={isRTL ? 'right' : 'left'}
        onChangeText={onChangeValue}
        style={[
          style,
          { fontFamily: getFont(fontWeights.Medium) },
          themedStyles.xs,
          themedStyles.Medium,
        ]}
        {...textInputProps}
        placeholder={
          placeholder ? translate(placeholder, placeholderProps) : null
        }
        placeholderTextColor={getThemeColor('textTertiary')}
      />
    );
  },
);

export default BaseTextInput;
