import { RNStyle } from '@/types/themes';

export type CalendarType = 'gregorian' | 'hijri';
export type SelectionMode = 'single' | 'range';
export type LabelVariant = 'large' | 'small';

export type RangeValue = {
  startDate: Date | null;
  endDate: Date | null;
};

export type SingleValue = Date | null;

export type DatePickerValue = SingleValue | RangeValue;

interface DatePickerProps {
  testId?: string;
  mode?: SelectionMode; // single | range
  calendarType?: CalendarType; // gregorian | hijri
  labelVariant?: LabelVariant; // large | small
  value?: DatePickerValue;
  // Emits the selected value with a formatted label
  onChangeValue?: (result: { value: DatePickerValue; label: string }) => void;
  // Date format for label. Defaults to 'DD/MM/YYYY'.
  format?: string;
  // If true (default), label is formatted in Hijri when calendarType is 'hijri'
  hijriLabel?: boolean;
  onCalendarTypeChange?: (type: CalendarType) => void;
  minDate?: Date;
  maxDate?: Date;
  initialVisibleDate?: Date; // month shown initially (gregorian base)
  containerStyle?: RNStyle;
}

export default DatePickerProps;
