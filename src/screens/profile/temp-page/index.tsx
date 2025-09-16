/* eslint-disable  */
import styles from './styles';
import Page from '@/components/templates/page';
import { useThemeStore } from '@/store/theme';
import { useNavigation } from '@/hooks';
import TimePickerInput from '@/components/molecules/time-picker-input';
import { Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

const TempPageScreen = () => {
  const { navigateTo } = useNavigation();
  const screenTestId = 'profile-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const [time, setTime] = useState(new Date());

  return (
    <Page
      testId={screenTestId}
      useInfoBackground={true}
      innerPageStyle={themedStyles.container}
      scrollEnabled={false}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TimePickerInput
          value={time}
          onChange={setTime}
          minuteStep={1} // e.g., 1, 5, 15
          is24Hour={false} // true = 24h, false = AM/PM
          locale="ar-EG" // Arabic numbers
          amLabel="صباحًا"
          pmLabel="مساءً"
        />
        <Text style={{ marginTop: 20 }}>
          Selected: {time.toLocaleTimeString('ar-EG')}
        </Text>
      </View>
      <View></View>
    </Page>
  );
};

export default TempPageScreen;

//
// export default function Example() {
//   const [date, setDate] = useState(new Date());
//   return (
//     <View style={{ padding: 16 }}>
//       <TimePickerInput
//         value={date}
//         onChange={setDate}
//         minuteStep={5}
//         is24Hour={false}
//         locale={'ar-EG'}
//         amLabel={'صباحًا'}
//         pmLabel={'مساءً'}
//       />
//       <Text style={{ marginTop: 16 }}>{date.toLocaleTimeString('ar-EG')}</Text>
//     </View>
//   );
// }
