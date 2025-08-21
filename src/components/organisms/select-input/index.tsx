import { useCallback, useState } from 'react';
import SelectInputProps from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';
import InputContainer from '@/components/molecules/input-container';
import { Pressable } from 'react-native';
import { Paragraph } from '@/components/atoms';
import ActionMenu from '../action-menu';
import { SnapPoints } from '@/components/molecules/base-sheet/constants';

type InputState =
  | 'default'
  | 'hover'
  | 'pressed'
  | 'focused'
  | 'disabled'
  | 'error';

const SelectInput = ({
  labelProps,
  required,
  inputStyle,
  containerStyle,
  testId,
  leadingIconProps,
  style,
  error,
  disabled,
  placeholder,
  placeholderProps,
  ...actionMenuProps
}: SelectInputProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [modalVisible, setModalVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const getState = useCallback((): InputState => {
    if (disabled) return 'disabled';
    if (error) return 'error';
    if (pressed) return 'pressed';
    if (hovered) return 'hover';
    if (modalVisible) return 'focused';
    return 'default';
  }, [disabled, error, modalVisible, hovered, pressed]);

  return (
    <>
      <ActionMenu
        {...actionMenuProps}
        testId=""
        items={[]}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        snapPoints={[SnapPoints.MD, SnapPoints.LG, SnapPoints.XL]}
      />
      <InputContainer
        testId={testId}
        required={required}
        labelProps={labelProps}
        containerStyle={containerStyle}
        trailingIconProps={{ name: 'ChevronDown' }}
        leadingIconProps={leadingIconProps}
        inputStyle={style}
        state={getState()}
        onPressContainer={() => setModalVisible(true)}>
        <Pressable
          style={[themedStyles.flexOne, inputStyle]}
          onHoverIn={() => setHovered(true)}
          onHoverOut={() => setHovered(false)}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}>
          {placeholder && (
            <Paragraph
              testId=""
              text={placeholder}
              textProps={placeholderProps}
            />
          )}
        </Pressable>
      </InputContainer>
    </>
  );
};
export default SelectInput;
