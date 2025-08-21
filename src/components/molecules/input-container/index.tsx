import { PropsWithChildren } from 'react';
import { Pressable, View } from 'react-native';
import styles from './styles';
import { InputContainerProps } from './interface';
import { Headline, LucideIcon, Spacer } from '@/components/atoms';
import { useThemeStore } from '@/store/theme';

const InputContainer = ({
  testId,
  labelProps,
  containerStyle,
  inputStyle,
  leadingIconProps,
  trailingIconProps,
  onPressContainer,
  required,
  state = 'default',
  children,
}: PropsWithChildren<InputContainerProps>) => {
  const { getThemedStyles, getThemeColor } = useThemeStore();

  const themedStyles = getThemedStyles(styles);

  return (
    <View style={containerStyle} testID={`${testId}-input-container`}>
      {labelProps ? (
        <>
          <View style={themedStyles.labelContainer}>
            <Headline testId={`${testId}-input-label`} {...labelProps} />
            {required && (
              <LucideIcon
                testId={`${testId}-input-label-asterisk`}
                name="Asterisk"
                size={14}
                color={getThemeColor('textError')}
              />
            )}
          </View>
          <Spacer testId={`${testId}-input-label`} />
        </>
      ) : null}
      <Pressable
        onPress={onPressContainer}
        style={[themedStyles.inputContainer, themedStyles[state], inputStyle]}>
        {leadingIconProps && (
          <LucideIcon
            testId={`${testId}-input-leading-icon`}
            {...leadingIconProps}
          />
        )}
        {children}
        {trailingIconProps && (
          <LucideIcon
            testId={`${testId}-input-leading-icon`}
            {...trailingIconProps}
          />
        )}
      </Pressable>
    </View>
  );
};
export default InputContainer;
