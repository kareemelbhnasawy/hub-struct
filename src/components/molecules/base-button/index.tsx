import { Pressable, View } from 'react-native';
import BaseButtonProps from './interface';
import { baseStyles } from './style';
import { useThemeStore } from '@/store/theme';
import { Headline, LucideIcon, Paragraph } from '@/components/atoms';
import useBaseButton from './hook';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';
import { getButtonStyle } from './utils';
import LottieView from 'lottie-react-native';

const BaseButton = (props: BaseButtonProps) => {
  const {
    testId,
    textProps,
    size = 'md',
    disabled,
    danger,
    loading,
    success,
    leftIcon,
    rightIcon,
    variant = 'primary',
    fullWidth = true,
    containerStyle,
    ...restProps
  } = props;
  const {
    onBlurFn,
    onFocusFn,
    onHoverInFn,
    onHoverOutFn,
    onPressInFn,
    onPressOutFn,
    state,
    textType,
    textSize,
    loaderSize,
  } = useBaseButton(props);
  const TextComponent = textType === 'paragraph' ? Paragraph : Headline;
  const { getThemedStyles } = useThemeStore();
  const baseThemedStyles = getThemedStyles(baseStyles);
  const variantStyles = getButtonStyle(variant, danger);
  const variantThemedStyles = getThemedStyles(variantStyles);
  const hasBorder = !disabled && !loading && !success;
  return (
    <Pressable
      testID={`${testId}-button`}
      disabled={disabled || loading || success}
      onHoverIn={onHoverInFn}
      onHoverOut={onHoverOutFn}
      onFocus={onFocusFn}
      onBlur={onBlurFn}
      onPressIn={onPressInFn}
      onPressOut={onPressOutFn}
      style={[
        baseThemedStyles.button,
        fullWidth && baseThemedStyles.fullWidth,
        baseThemedStyles[size],
        variantThemedStyles[state],
        hasBorder ? variantThemedStyles.border : null,
        containerStyle,
      ]}
      {...restProps}>
      {leftIcon ? (
        <LucideIcon
          testId={`${testId}-button-left-icon`}
          {...leftIcon}
          style={variantThemedStyles[`${state}Icon`]}
        />
      ) : null}
      {loading ? (
        <View>
          <LottieView
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            source={require('@/assets/animations/loading-animation.json')}
            autoPlay
            loop
            style={{ width: loaderSize, height: loaderSize }}
          />
        </View>
      ) : null}
      <TextComponent
        testId={testId}
        weight="Semibold"
        size={textSize as ParagraphProps['size']}
        style={variantThemedStyles[state]}
        {...textProps}
      />
      {rightIcon ? (
        <LucideIcon
          testId={`${testId}-button-right-icon`}
          {...rightIcon}
          style={variantThemedStyles[`${state}Icon`]}
        />
      ) : null}
    </Pressable>
  );
};

export default BaseButton;
