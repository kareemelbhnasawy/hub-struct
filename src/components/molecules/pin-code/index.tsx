import { useEffect, useRef, useState } from 'react';
import { FlatList, TextInput, TextInputKeyPressEvent } from 'react-native';
import { PinCodeProps } from './interface';
import { useThemeStore } from '@/store/theme';
import { styles } from './styles';
import { Paragraph, Spacer } from '@/components/atoms';
import headlineStyles from '@/components/atoms/typography/headline/styles';

const PinCode = ({
  testId,
  pinLength = 6,
  onPinComplete,
  errorProps,
  disabled,
  secureTextEntry,
}: PinCodeProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const headlineThemedStyles = getThemedStyles(headlineStyles);
  const [pin, setPin] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const pinRefs = useRef<TextInput[]>([]);

  useEffect(() => {
    if (errorProps) {
      setPin('');
      focusInput(0);
    }
  }, [errorProps]);

  const focusInput = (index: number) => {
    if (index < pinLength && index >= 0) {
      pinRefs.current[index].focus();
      setFocusedIndex(index);
    }
  };

  const blurInput = (index: number) => {
    if (index < pinLength && index >= 0) {
      pinRefs.current[index].blur();
      setFocusedIndex(null);
    }
  };

  const setPinFn = (char: string, index: number) => {
    if (index < pinLength && index >= 0) {
      let pinTemp = pin;
      pinTemp =
        pinTemp.substring(0, index) + char + pinTemp.substring(index + 1);
      setPin(pinTemp);
      if (pinTemp.length === pinLength) {
        onPinComplete(pinTemp);
        blurInput(index);
      }
    }
  };

  const onKeyPressFn = (e: TextInputKeyPressEvent, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      setPin((prev) => prev.slice(0, -1));
      focusInput(Math.max(index - 1, 0));
    } else if (pin.charAt(index)) {
      setPinFn(e.nativeEvent.key, index + 1);
      focusInput(index + 2);
    } else if (/^\d+$/.test(e.nativeEvent.key)) {
      setPinFn(e.nativeEvent.key, index);
      focusInput(index + 1);
    }
  };

  const getFinalPinValue = (index: number) => {
    if (pin.charAt(index)) {
      return pin.charAt(index);
    }
    return '';
  };

  return (
    <>
      <FlatList
        key={`${testId}-pin-flatlist`}
        testID={`${testId}-pin-flatlist`}
        data={Array(pinLength).fill(null)}
        horizontal
        contentContainerStyle={themedStyles.pinContainer}
        renderItem={({ index }) => (
          <TextInput
            testID={`${testId}-code-pin-${index}`}
            onKeyPress={(e) => onKeyPressFn(e, index)}
            keyboardType="numeric"
            onFocus={() => {
              if (focusedIndex === null) {
                setFocusedIndex(index);
              } else if (index !== focusedIndex) {
                focusInput(focusedIndex);
              }
            }}
            editable={disabled}
            maxLength={1}
            secureTextEntry={secureTextEntry}
            style={[
              headlineThemedStyles.md,
              headlineThemedStyles.Medium,
              themedStyles.pin,
              focusedIndex === index ? themedStyles.pinFocused : null,
              errorProps ? themedStyles.pinError : null,
            ]}
            value={getFinalPinValue(index)}
            ref={(el) => {
              pinRefs.current[index] = el;
            }}
          />
        )}
      />
      <Spacer />
      {errorProps ? (
        <Paragraph
          style={themedStyles.textError}
          size="xl"
          testId={`${testId}-pin-error`}
          {...errorProps}
        />
      ) : undefined}
    </>
  );
};
export default PinCode;