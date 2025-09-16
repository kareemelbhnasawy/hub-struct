/* eslint-disable  */
import React, { useState } from 'react';
import WheelPicker, {
  type PickerItem,
  useOnPickerValueChangedEffect,
  useOnPickerValueChangingEffect,
  usePickerControl,
  withPickerControl,
} from '@quidone/react-native-wheel-picker';
import { Text, View } from 'react-native';
import { Headline, Paragraph } from '@/components/atoms';

const ControlPicker = withPickerControl(WheelPicker);

type ControlPickersMap = {
  value1: { item: PickerItem<number> };
  value2: { item: PickerItem<number> };
  value3: { item: PickerItem<number> };
};

const data1 = Array.from({ length: 12 }, (_, index) => ({
  value: index,
  label: index + 1 + '',
}));
const data2 = Array.from({ length: 60 }, (_, index) => ({
  value: index,
  label: index + '',
}));

const TimePickerInput = () => {
  const [value, setValue] = useState({ value1: 0, value2: 0, value3: 0 });

  const pickerControl = usePickerControl<ControlPickersMap>();

  useOnPickerValueChangedEffect(pickerControl, (event) => {
    setValue({
      value1: event.pickers.value1.item.value,
      value2: event.pickers.value2.item.value,
      value3: event.pickers.value3.item.value,
    });
    console.log('changed: ', pickerControl, event);
  });

  useOnPickerValueChangingEffect(pickerControl, (event) => {
    // some logic
    console.log('changing: ', pickerControl, event);
  });

  //

  return (
    <View
      style={{
        flexDirection: 'row-reverse',
        // justifyContent: 'space-around',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
      }}>
      {/* <WheelPicker
        style={{ backgroundColor: 'white', height: 240 }}
        data={new Array(12)
          .fill(null)
          .map((_, i) => ({ label: i + 1 + '', value: i }))}
        value={0}
        width={'33%'}
        overlayItemStyle={{ borderRadius: 0 }}
      />

      <WheelPicker
        style={{ backgroundColor: 'white', height: 240 }}
        data={new Array(60)
          .fill(null)
          .map((_, i) => ({ label: i + '', value: i }))}
        value={0}
        width={'33%'}
        overlayItemStyle={{ borderRadius: 0 }}
      />

      <WheelPicker
        style={{ backgroundColor: 'white', height: 240 }}
        data={[
          { label: 'AM', value: 0 },
          { label: 'PM', value: 0 },
        ]}
        value={0}
        width={'33%'}
        overlayItemStyle={{ borderRadius: 0 }}
      /> */}
      <ControlPicker
        control={pickerControl}
        pickerName={'value1'}
        data={data1}
        value={value.value1}
        width={100}
        enableScrollByTapOnItem={true}
        overlayItemStyle={{ borderRadius: 0, height: 50 }}
      />
      <View
        style={{
          fontSize: 40,
          width: 25,
          justifyContent: 'flex-start',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 0,
          height: 50,
          borderRadius: 0,
          backgroundColor: '#eaeaea',
        }}>
        <Headline
          testId="a"
          text=":"
          weight="Bold"
          size="2xl"
          style={{ textAlign: 'center' }}></Headline>
      </View>
      <ControlPicker
        control={pickerControl}
        pickerName={'value2'}
        data={data2}
        value={value.value2}
        width={100}
        enableScrollByTapOnItem={true}
        overlayItemStyle={{
          borderRadius: 0,
          height: 50,
        }}
      />
      <ControlPicker
        control={pickerControl}
        pickerName={'value3'}
        data={[
          { value: 0, label: 'AM' },
          { value: 1, label: 'PM' },
        ]}
        value={value.value3}
        width={100}
        enableScrollByTapOnItem={true}
        overlayItemStyle={{ borderRadius: 0, height: 50 }}
      />
    </View>
  );
};

export default TimePickerInput;
