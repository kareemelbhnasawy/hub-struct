import { Pressable } from 'react-native';
import { useThemeStore } from '@/store/theme';
import { Headline } from '@/components/atoms';
import AlertButtonProps from './interface';
import styles from './style';

const AlertButton = (props: AlertButtonProps) => {
  const {
    testId,
    textProps,
    disabled,
    variant = 'primary',
    ...restProps
  } = props;

  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  return (
    <Pressable
      testID={`${testId}-button`}
      disabled={disabled}
      style={[themedStyles.button, themedStyles[variant]]}
      {...restProps}>
      <Headline
        testId={testId}
        size="2xs"
        weight="Semibold"
        style={[themedStyles[variant], themedStyles.bgTrans]}
        {...textProps}
      />
    </Pressable>
  );
};

export default AlertButton;
