import React, { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import DatePicker from './index';
import { Paragraph } from '@/components/atoms';
import { createThemedStyles } from '@/utilities';
import { useThemeStore } from '@/store/theme';
import {
  CalendarType,
  DatePickerValue,
  LabelVariant,
  SelectionMode,
} from './interface';

const styles = createThemedStyles({
  container: {
    base: {
      padding: 16,
      gap: 16,
    },
  },
  row: {
    base: {
      flexDirection: 'row',
      gap: 16,
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  },
  card: {
    base: {
      width: '100%',
      gap: 8,
    },
  },
  title: {
    base: {
      color: 'foregroundSecondary',
    },
  },
});

const Sample = ({
  title,
  mode,
  type,
  variant,
  initial,
}: {
  title: string;
  mode: SelectionMode;
  type: CalendarType;
  variant: LabelVariant;
  initial?: DatePickerValue;
}) => {
  const { getThemedStyles } = useThemeStore();
  const themed = getThemedStyles(styles);
  const [val, setVal] = useState<DatePickerValue | undefined>(initial);

  return (
    <View style={themed.card}>
      <Paragraph
        testId={`dp-demo-${title}`}
        size="md"
        weight="Semibold"
        isTranslated={false}
        style={themed.title}
        text={title}
      />
      <DatePicker
        testId={`dp-${title}`}
        mode={mode}
        calendarType={type}
        labelVariant={variant}
        value={val}
        onChangeValue={(res) => setVal(res.value)}
      />
    </View>
  );
};

const DatePickerDemo = () => {
  const { getThemedStyles } = useThemeStore();
  const themed = getThemedStyles(styles);

  const today = useMemo(() => new Date(), []);
  const in5 = useMemo(
    () => new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5),
    [today],
  );

  return (
    <ScrollView contentContainerStyle={themed.container}>
      <View style={themed.row}>
        <Sample
          title="Single • Gregorian • Large"
          mode="single"
          type="gregorian"
          variant="large"
        />
        <Sample
          title="Single • Hijri • Large"
          mode="single"
          type="hijri"
          variant="large"
        />
        <Sample
          title="Single • Gregorian • Small"
          mode="single"
          type="gregorian"
          variant="small"
        />
        <Sample
          title="Single • Hijri • Small"
          mode="single"
          type="hijri"
          variant="small"
        />
        <Sample
          title="Range • Gregorian • Large"
          mode="range"
          type="gregorian"
          variant="large"
          initial={{ startDate: today, endDate: in5 }}
        />
        <Sample
          title="Range • Hijri • Small"
          mode="range"
          type="hijri"
          variant="small"
          initial={{ startDate: today, endDate: in5 }}
        />
      </View>
    </ScrollView>
  );
};

export default DatePickerDemo;
