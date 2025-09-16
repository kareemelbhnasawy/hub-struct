/* eslint-disable  */

import { View, Text } from 'react-native';
import React from 'react';
import WheelPicker from 'react-native-wheely';

const TimePickerInput = () => {
  return (
    <View>
      <WheelPicker
        options={[
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
        ]}
        onChange={(val) => {
          console.log(val);
        }}
        selectedIndex={0}
        flatListProps={{
          onScroll: (event) => {
            console.log('a', event.nativeEvent.contentOffset.y);
          },
          onScrollBeginDrag: () => {
            console.log('ewrjweirjhweirhweirhi');
          },
        }}
      />
    </View>
  );
};

export default TimePickerInput;
