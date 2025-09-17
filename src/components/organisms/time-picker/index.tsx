import React, { useCallback, useState, useMemo } from 'react';
import { View, Pressable } from 'react-native';
import { WheelPicker } from 'react-native-infinite-wheel-picker';
import TimePickerProps, { TimeValue } from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { Headline, Paragraph } from '@/components/atoms';
import { InputContainer, BaseSheet } from '@/components/molecules';
import { SnapPoints } from '@/components/molecules/base-sheet/constants';

type InputState =
  | 'default'
  | 'hover'
  | 'pressed'
  | 'focused'
  | 'disabled'
  | 'error';

const TimePicker = ({
  testId,
  labelProps,
  isRequired,
  inputStyle,
  containerStyle,
  style,
  disabled,
  placeholder = 'Select time',
  placeholderColor = 'textTertiary',
  value,
  onChangeValue,
  modalProps,
  showHours = true,
  showMinutes = true,
  showSeconds = true,
  ...props
}: TimePickerProps) => {
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [modalVisible, setModalVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  // Generate arrays for the wheel pickers
  const hours = useMemo(
    () => Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')),
    [],
  );
  const minutes = useMemo(
    () => Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')),
    [],
  );
  const seconds = useMemo(
    () => Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')),
    [],
  );

  const getState = useCallback((): InputState => {
    if (disabled) return 'disabled';
    if (pressed) return 'pressed';
    if (hovered) return 'hover';
    if (modalVisible) return 'focused';
    return 'default';
  }, [disabled, modalVisible, hovered, pressed]);

  const formatDisplayValue = useCallback(
    (timeValue?: TimeValue) => {
      if (!timeValue) return placeholder;

      const parts: string[] = [];
      if (showHours) parts.push(timeValue.hour.toString().padStart(2, '0'));
      if (showMinutes) parts.push(timeValue.minute.toString().padStart(2, '0'));
      if (showSeconds) parts.push(timeValue.second.toString().padStart(2, '0'));

      return parts.join(':');
    },
    [placeholder, showHours, showMinutes, showSeconds],
  );

  const handleTimeChange = useCallback(
    (component: 'hour' | 'minute' | 'second', newValue: string) => {
      const numValue = parseInt(newValue, 10);
      const currentTime = value || { hour: 9, minute: 30, second: 0 }; // Default based on Figma design

      const updatedTime: TimeValue = {
        ...currentTime,
        [component]: numValue,
      };

      onChangeValue?.(updatedTime);
    },
    [value, onChangeValue],
  );

  const renderWheelItem = useCallback(
    (item: string, index: number, isSelected: boolean) => {
      // Calculate distance from selected item to determine styling
      const middleIndex = Math.floor(60 / 2); // Assuming 60 items visible
      const distance = Math.abs(index - middleIndex);

      let textSize: 'lg' | 'md' | 'sm' | 'xs';
      let textWeight: 'Medium' | 'Regular' = 'Medium';
      let textColor: 'textPrimary' | 'textTertiary' = 'textTertiary';

      if (isSelected) {
        textSize = 'lg';
        textColor = 'textPrimary';
      } else if (distance === 1) {
        textSize = 'md';
      } else if (distance === 2) {
        textSize = 'sm';
      } else {
        textSize = 'xs';
      }

      return (
        <View style={themedStyles.wheelPickerItem}>
          <Headline
            testId={`${testId}-wheel-item-${item}`}
            text={item}
            size={textSize}
            weight={textWeight}
            color={textColor}
          />
        </View>
      );
    },
    [testId, themedStyles],
  );

  const renderSelectedBackground = useCallback(
    () => (
      <View
        style={[
          themedStyles.selectedItemBackground,
          { backgroundColor: getThemeColor('backgroundBrandPrimaryLight') },
        ]}
      />
    ),
    [themedStyles, getThemeColor],
  );

  return (
    <>
      <BaseSheet
        testId={`${testId}-time-picker-sheet`}
        titleProps={{ text: 'Select Time', size: 'md', weight: 'Medium' }}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        snapPoints={SnapPoints.MD}
        hasSubmitButton={false}
        hasCloseButton={true}
        {...modalProps}>
        <View style={themedStyles.timePickerContainer}>
          {/* Selected item background overlay */}
          {renderSelectedBackground()}

          {showHours && (
            <>
              <View style={themedStyles.wheelContainer}>
                <View style={themedStyles.wheelPickerWrapper}>
                  <WheelPicker
                    data={hours}
                    initialSelectedIndex={value?.hour ?? 9}
                    selectedIndex={value?.hour}
                    onChangeValue={(index, val) => handleTimeChange('hour', String(val))}
                    elementHeight={36}
                    restElements={3}
                    containerStyle={{ height: 36 * (3 * 2 + 1) }}
                    selectedLayoutStyle={{
                      backgroundColor: getThemeColor('backgroundBrandPrimaryLight'),
                      borderRadius: 8,
                      height: 36,
                    }}
                    elementTextStyle={{
                      fontSize: 24,
                      color: getThemeColor('textTertiary'),
                    }}
                  />
                </View>
              </View>

              {(showMinutes || showSeconds) && (
                <View style={themedStyles.separatorContainer}>
                  <Headline
                    testId={`${testId}-separator`}
                    text=":"
                    size="lg"
                    weight="Medium"
                    color="textPrimary"
                  />
                </View>
              )}
            </>
          )}

          {showMinutes && (
            <>
              <View style={themedStyles.wheelContainer}>
                <View style={themedStyles.wheelPickerWrapper}>
                  <InfiniteWheelPicker
                    data={minutes}
                    selectedIndex={value?.minute || 30}
                    onSelectedChange={(index) =>
                      handleTimeChange('minute', minutes[index])
                    }
                    itemHeight={36}
                    itemTextStyle={{
                      fontFamily: 'HRSD Gov',
                      fontSize: 24,
                      color: getThemeColor('textTertiary'),
                    }}
                    selectedItemTextStyle={{
                      fontFamily: 'HRSD Gov',
                      fontSize: 32,
                      fontWeight: '500',
                      color: getThemeColor('textPrimary'),
                    }}
                    containerStyle={{ height: 200 }}
                    renderItem={renderWheelItem}
                  />
                </View>
              </View>

              {showSeconds && (
                <View style={themedStyles.separatorContainer}>
                  <Headline
                    testId={`${testId}-separator-2`}
                    text=":"
                    size="lg"
                    weight="Medium"
                    color="textPrimary"
                  />
                </View>
              )}
            </>
          )}

          {showSeconds && (
            <View style={themedStyles.wheelContainer}>
              <View style={themedStyles.wheelPickerWrapper}>
                <InfiniteWheelPicker
                  data={seconds}
                  selectedIndex={value?.second || 0}
                  onSelectedChange={(index) =>
                    handleTimeChange('second', seconds[index])
                  }
                  itemHeight={36}
                  itemTextStyle={{
                    fontFamily: 'HRSD Gov',
                    fontSize: 24,
                    color: getThemeColor('textTertiary'),
                  }}
                  selectedItemTextStyle={{
                    fontFamily: 'HRSD Gov',
                    fontSize: 32,
                    fontWeight: '500',
                    color: getThemeColor('textPrimary'),
                  }}
                  containerStyle={{ height: 200 }}
                  renderItem={renderWheelItem}
                />
              </View>
            </View>
          )}
        </View>
      </BaseSheet>

      <InputContainer
        testId={testId}
        isRequired={isRequired}
        labelProps={labelProps}
        containerStyle={containerStyle}
        trailingIconProps={{ name: 'Clock', color: 'textTertiary' }}
        inputStyle={style}
        state={getState()}
        {...props}>
        <Pressable
          style={[themedStyles.flexOne, inputStyle]}
          onHoverIn={() => setHovered(true)}
          onHoverOut={() => setHovered(false)}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          onPress={() => !disabled && setModalVisible(true)}
          disabled={disabled}>
          <Paragraph
            testId={`${testId}-display-value`}
            text={formatDisplayValue(value)}
            color={value ? 'textPrimary' : placeholderColor}
            size="md"
          />
        </Pressable>
      </InputContainer>
    </>
  );
};

export default TimePicker;
