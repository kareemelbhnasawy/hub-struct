import { PropsWithChildren } from 'react';
import { Pressable, View } from 'react-native';
import styles from './styles';
import { InputContainerProps } from './interface';
import { Headline, LucideIcon, Paragraph, Spacer } from '@/components/atoms';
import { useThemeStore } from '@/store/theme';

const InputContainer = ({
  testId,
  labelProps,
  containerStyle,
  inputStyle,
  leadingIconProps,
  trailingIconProps,
  onPressContainer,
  isRequired,
  state = 'default',
  errorProps,
  children,
}: PropsWithChildren<InputContainerProps>) => {
  const { getThemedStyles } = useThemeStore();

  const themedStyles = getThemedStyles(styles);

  const finalState = errorProps ? 'error' : state;

  return (
    <View style={containerStyle} testID={`${testId}-input-container`}>
      {labelProps ? (
        <>
          <View style={themedStyles.labelContainer}>
            <Headline
              size="2xs"
              weight="Medium"
              testId={`${testId}-input-label`}
              {...labelProps}
              style={themedStyles.textDefault}
            />
            {isRequired && (
              <LucideIcon
                testId={`${testId}-input-label-asterisk`}
                name="Asterisk"
                size={14}
                color={'textError'}
              />
            )}
          </View>
          <Spacer testId={`${testId}-input-label`} />
        </>
      ) : null}
      <Pressable
        onPress={onPressContainer}
        style={[
          themedStyles.inputContainer,
          themedStyles[finalState],
          inputStyle,
        ]}>
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
      {errorProps ? (
        <>
          <Spacer space="sm" />
          <Paragraph
            testId={`${testId}-input-error-string`}
            style={themedStyles.errorColor}
            size="xl"
            {...errorProps}
          />
        </>
      ) : null}
    </View>
  );
};
export default InputContainer;
