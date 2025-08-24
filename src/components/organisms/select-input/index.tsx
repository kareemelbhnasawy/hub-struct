import { useCallback, useState } from 'react';
import SelectInputProps from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { Pressable } from 'react-native';
import { Paragraph } from '@/components/atoms';
import ActionMenu from '../action-menu';
import { SnapPoints } from '@/components/molecules/base-sheet/constants';
import { InputContainer } from '@/components/molecules';

type InputState =
  | 'default'
  | 'hover'
  | 'pressed'
  | 'focused'
  | 'disabled'
  | 'error';

const SelectInput = ({
  labelProps,
  isRequired,
  inputStyle,
  containerStyle,
  testId,
  leadingIconProps,
  style,
  error,
  disabled,
  placeholder,
  placeholderProps,
  items,
  value,
  onChangeValue,
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
        items={items}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        snapPoints={SnapPoints.LG}
        onSelect={onChangeValue}
      />
      <InputContainer
        testId={testId}
        isRequired={isRequired}
        labelProps={labelProps}
        containerStyle={containerStyle}
        trailingIconProps={{ name: 'ChevronDown' }}
        leadingIconProps={leadingIconProps}
        inputStyle={style}
        state={getState()}>
        <Pressable
          style={[themedStyles.flexOne, inputStyle]}
          onHoverIn={() => setHovered(true)}
          onHoverOut={() => setHovered(false)}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          onPress={() => setModalVisible(true)}>
          {placeholder && (
            <Paragraph
              testId=""
              text={value || placeholder}
              textProps={placeholderProps}
            />
          )}
        </Pressable>
      </InputContainer>
    </>
  );
};
export default SelectInput;
