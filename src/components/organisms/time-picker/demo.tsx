import React, { useState } from 'react';
import { View } from 'react-native';
import TimePicker from './index';
import { TimeValue } from './interface';
import { Headline, Spacer } from '@/components/atoms';
import { createThemedStyles } from '@/utilities';
import { useThemeStore } from '@/store/theme';

const styles = createThemedStyles({
  container: {
    base: {
      flex: 1,
      padding: 20,
      backgroundColor: 'backgroundPrimary',
    },
  },
  demoSection: {
    base: {
      marginBottom: 30,
    },
  },
});

const TimePickerDemo = () => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  
  const [time1, setTime1] = useState<TimeValue | undefined>();
  const [time2, setTime2] = useState<TimeValue>({ hour: 9, minute: 30, second: 0 });
  const [minutesSeconds, setMinutesSeconds] = useState<TimeValue | undefined>();

  return (
    <View style={themedStyles.container}>
      <Headline
        testId="demo-title"
        text="TimePicker Component Demo"
        size="lg"
        weight="Bold"
        color="textPrimary"
      />
      
      <Spacer testId="spacer-1" space={30} />
      
      {/* Basic time picker */}
      <View style={themedStyles.demoSection}>
        <Headline
          testId="demo-section-1"
          text="Basic Time Picker (Hours:Minutes:Seconds)"
          size="sm"
          weight="Medium"
          color="textSecondary"
        />
        <Spacer testId="spacer-2" space={10} />
        <TimePicker
          testId="time-picker-1"
          labelProps={{ text: "Select Time" }}
          placeholder="Choose a time"
          value={time1}
          onChangeValue={setTime1}
          isRequired
        />
      </View>

      {/* Time picker with default value */}
      <View style={themedStyles.demoSection}>
        <Headline
          testId="demo-section-2"
          text="Time Picker with Default Value"
          size="sm"
          weight="Medium"
          color="textSecondary"
        />
        <Spacer testId="spacer-3" space={10} />
        <TimePicker
          testId="time-picker-2"
          labelProps={{ text: "Meeting Time" }}
          placeholder="Select meeting time"
          value={time2}
          onChangeValue={setTime2}
        />
      </View>

      {/* Minutes and seconds only (as requested) */}
      <View style={themedStyles.demoSection}>
        <Headline
          testId="demo-section-3"
          text="Minutes and Seconds Only (as per Figma design)"
          size="sm"
          weight="Medium"
          color="textSecondary"
        />
        <Spacer testId="spacer-4" space={10} />
        <TimePicker
          testId="time-picker-3"
          labelProps={{ text: "Duration" }}
          placeholder="Select duration"
          value={minutesSeconds}
          onChangeValue={setMinutesSeconds}
          showHours={false}
          showMinutes={true}
          showSeconds={true}
        />
      </View>

      {/* Disabled state */}
      <View style={themedStyles.demoSection}>
        <Headline
          testId="demo-section-4"
          text="Disabled Time Picker"
          size="sm"
          weight="Medium"
          color="textSecondary"
        />
        <Spacer testId="spacer-5" space={10} />
        <TimePicker
          testId="time-picker-4"
          labelProps={{ text: "Disabled Field" }}
          placeholder="Cannot select"
          disabled={true}
        />
      </View>
    </View>
  );
};

export default TimePickerDemo;
