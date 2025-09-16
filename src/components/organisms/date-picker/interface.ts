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
  onChange?: (value: DatePickerValue) => void;
  onCalendarTypeChange?: (type: CalendarType) => void;
  minDate?: Date;
  maxDate?: Date;
  initialVisibleDate?: Date; // month shown initially (gregorian base)
  containerStyle?: RNStyle;
}

export default DatePickerProps;

