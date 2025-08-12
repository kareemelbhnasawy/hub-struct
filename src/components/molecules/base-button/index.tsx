import { ActivityIndicator, Pressable } from 'react-native';
import BaseButtonProps from './interface';
import { styles } from './style';
import { getThemeColor } from '@/theme/theme-colors';
import { Headline, LucideIcon, Paragraph } from '@/components/atoms';
import useBaseButton from './hook';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';

const BaseButton = (props: BaseButtonProps) => {
  const {
    textProps,
    size = 'md',
    disabled,
    loading,
    leftIcon,
    rightIcon,
    variant = 'primary',
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
  } = useBaseButton(props);

  const TextComponent = textType === 'paragraph' ? Paragraph : Headline;

  return (
    <Pressable
      disabled={disabled || loading}
      onHoverIn={onHoverInFn}
      onHoverOut={onHoverOutFn}
      onFocus={onFocusFn}
      onBlur={onBlurFn}
      onPressIn={onPressInFn}
      onPressOut={onPressOutFn}
      style={[
        styles.base.button,
        styles[variant][state].wrapper,
        styles.base[size],
      ]}
      {...restProps}>
      {loading ? (
        <ActivityIndicator
          color={getThemeColor(
            variant === 'primary' ? 'alphaWhite30' : 'alphaBlack60',
          )}
        />
      ) : (
        <>
          {leftIcon ? (
            <LucideIcon {...leftIcon} style={styles[variant][state].icon} />
          ) : null}
          <TextComponent
            weight="Medium"
            size={textSize as ParagraphProps['size']}
            style={styles[variant][state].text}
            {...textProps}
          />
          {rightIcon ? (
            <LucideIcon {...rightIcon} style={styles[variant][state].icon} />
          ) : null}
        </>
      )}
    </Pressable>
  );
};

export default BaseButton;
