import { Pressable, View } from 'react-native';
import LinkButtonProps from './interface';
import Paragraph from '../../atoms/typography/paragraph';
import useLinkButton from './hook';
import { linkStyles } from './style';
import { useThemeStore } from '@/store/theme';
import { Headline } from '@/components/atoms';
import ParagraphProps from '@/components/atoms/typography/paragraph/interface';

const LinkButton = (props: LinkButtonProps) => {
  const {
    textProps,
    disabled,
    loading,
    ...restProps
  } = props;

  const {
    state,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    onPressIn,
    onPressOut,
    textType,
    textSize,
  } = useLinkButton(props);

  const TextComponent = textType === 'paragraph' ? Paragraph : Headline;
  const { getThemedStyles } = useThemeStore();
  const linkThemedStyles = getThemedStyles(linkStyles);
  const hasBorder = state === 'focused';

  return (
    <Pressable
      disabled={disabled || loading}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onFocus={onFocus}
      onBlur={onBlur}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...restProps}>
      {hasBorder ? (
        <View style={linkThemedStyles.border}>
          <TextComponent
            weight="Medium"
            size={textSize as ParagraphProps['size']}
            style={linkThemedStyles[`${state}Text`]}
            {...textProps}
          />
        </View>
      ) : (
        <TextComponent
          weight="Medium"
          size={textSize as ParagraphProps['size']}
          style={linkThemedStyles[`${state}Text`]}
          {...textProps}
        />
      )}
    </Pressable>
  );
};

export default LinkButton;
