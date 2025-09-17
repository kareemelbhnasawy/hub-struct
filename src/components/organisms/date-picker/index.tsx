import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import DatePickerProps, {
  CalendarType,
  DatePickerValue,
  LabelVariant,
  RangeValue,
  SelectionMode,
  SingleValue,
} from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { LucideIcon, Paragraph } from '@/components/atoms';
import { useTranslate } from '@/hooks';
import moment from 'moment-hijri';
import {
  WEEK_DAYS_AR,
  WEEK_DAYS_EN,
  HIJRI_MONTHS_AR,
  HIJRI_MONTHS_EN,
  GREG_MONTHS_AR,
  GREG_MONTHS_EN,
  addMonths,
  addYears,
  buildMonthMatrix,
  getMonthLabel,
  getMonthIndex,
  isInRange,
  isSameDay,
  setMonth,
  setYear,
  sortRange,
} from './utils';

type ViewMode = 'calendar' | 'months' | 'years';

const Segmented = ({
  value,
  onChange,
  variant,
}: {
  value: CalendarType;
  onChange: (t: CalendarType) => void;
  variant: LabelVariant;
}) => {
  const { getThemedStyles } = useThemeStore();
  const themed = getThemedStyles(styles);
  const { locale } = useTranslate();

  const containerStyle =
    variant === 'large' ? themed.segContainerLarge : themed.segContainerSmall;
  const itemStyle =
    variant === 'large' ? themed.segItemLarge : themed.segItemSmall;
  const textStyle =
    variant === 'large' ? themed.segTextLarge : themed.segTextSmall;

  const labelGregorian = locale === 'ar' ? 'ميلادي' : 'Gregorian';
  const labelHijri = locale === 'ar' ? 'هجري' : 'Hijri';
  return (
    <View style={containerStyle}>
      {[
        { key: 'gregorian' as CalendarType, label: labelGregorian },
        { key: 'hijri' as CalendarType, label: labelHijri },
      ].map((opt) => {
        const active = value === opt.key;
        return (
          <Pressable
            key={opt.key}
            onPress={() => onChange(opt.key)}
            style={[itemStyle, active && themed.segItemActive]}
            accessibilityRole="button">
            <Paragraph
              testId={`seg-${opt.key}`}
              size={variant === 'large' ? 'md' : 'sm'}
              weight="Semibold"
              style={[textStyle, active && themed.segTextActive]}
              isTranslated={false}
              text={opt.label}
            />
          </Pressable>
        );
      })}
    </View>
  );
};

const DatePicker: React.FC<DatePickerProps> = ({
  testId = 'date-picker',
  mode: modeProp = 'single',
  calendarType: calendarTypeProp = 'gregorian',
  labelVariant = 'large',
  value,
  onChange,
  onCalendarTypeChange,
  minDate,
  maxDate,
  initialVisibleDate,
  containerStyle,
}) => {
  const { getThemedStyles } = useThemeStore();
  const themed = getThemedStyles(styles);
  const { isRTL, locale } = useTranslate();

  const [calendarType, setCalendarType] =
    useState<CalendarType>(calendarTypeProp);
  const [mode] = useState<SelectionMode>(modeProp);
  const [viewMode, setViewMode] = useState<ViewMode>('calendar');
  const [visibleDate, setVisibleDate] = useState<Date>(
    initialVisibleDate || new Date(),
  );

  const months = useMemo(() => {
    if (calendarType === 'hijri')
      return locale === 'ar' ? HIJRI_MONTHS_AR : HIJRI_MONTHS_EN;
    return locale === 'ar' ? GREG_MONTHS_AR : GREG_MONTHS_EN;
  }, [calendarType, locale]);

  const weekDays = useMemo(
    () => (locale === 'ar' ? WEEK_DAYS_AR : WEEK_DAYS_EN),
    [locale],
  );

  const matrix = useMemo(
    () => buildMonthMatrix(visibleDate, calendarType),
    [visibleDate, calendarType],
  );

  // selection state (uncontrolled if no value prop)
  const [internalSingle, setInternalSingle] = useState<SingleValue>(null);
  const [internalRange, setInternalRange] = useState<RangeValue>({
    startDate: null,
    endDate: null,
  } as RangeValue);

  const currentValue: DatePickerValue | undefined =
    value ?? (mode === 'single' ? internalSingle : internalRange);

  const asRange = (v?: DatePickerValue | null): RangeValue => {
    if (!v || typeof v === 'string') {
      return { startDate: null, endDate: null };
    }
    if (v instanceof Date) {
      return { startDate: v, endDate: null };
    }
    if ('startDate' in v) {
      return v;
    }
    return { startDate: null, endDate: null };
  };

  const commitValue = (next: DatePickerValue) => {
    if (onChange) onChange(next);
    if (!value) {
      if (mode === 'single') setInternalSingle(next as SingleValue);
      else setInternalRange(next as RangeValue);
    }
  };

  const headerTitle = useMemo(
    () =>
      getMonthLabel(visibleDate, calendarType, locale === 'ar' ? 'ar' : 'en'),
    [visibleDate, calendarType, locale],
  );

  const onPrev = () => setVisibleDate(addMonths(visibleDate, -1, calendarType));
  const onNext = () => setVisibleDate(addMonths(visibleDate, 1, calendarType));
  const gotoMonthOf = (d: Date) => {
    const m = moment(d);
    const next =
      calendarType === 'hijri'
        ? m.startOf('iMonth').toDate()
        : m.startOf('month').toDate();
    setVisibleDate(next);
  };

  const handleDayPress = (d: Date) => {
    const newDate = toStart(d);

    if (mode === 'single') {
      commitValue(newDate);
      return;
    }

    const current = asRange(currentValue);

    if (!current?.startDate || (current.startDate && current.endDate)) {
      // Start new range selection
      commitValue({ startDate: newDate, endDate: null } as RangeValue);
    } else {
      // Complete the range selection
      if (moment(newDate).isSame(current.startDate, 'day')) {
        // If clicking same date, clear selection
        commitValue({ startDate: null, endDate: null } as RangeValue);
      } else {
        // Sort the dates to ensure startDate is always before endDate
        const sorted = sortRange(current.startDate, newDate);
        commitValue({
          startDate: sorted.start,
          endDate: sorted.end,
        } as RangeValue);
      }
    }
  };

  const toStart = (d: Date) => {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
  };

  const renderCalendar = () => {
    const selectedSingle = (currentValue as SingleValue) ?? null;
    const selectedRange = asRange(currentValue);

    return (
      <View>
        {/* Week header */}
        <View style={themed.weekHeader}>
          {weekDays.map((wd) => (
            <Paragraph
              key={wd}
              testId={`${testId}-wd-${wd}`}
              size="sm"
              weight="Medium"
              isTranslated={false}
              style={themed.weekDay}
              text={wd}
            />
          ))}
        </View>

        {/* Days */}
        <View style={themed.grid}>
          {matrix.map((row, rIdx) => (
            <View key={`r-${rIdx}`} style={themed.row}>
              {row.map((cell, cIdx) => {
                const isMuted = !cell.isCurrentMonth;
                const isToday = moment(cell.date).isSame(new Date(), 'day');
                const isDisabled =
                  (minDate && moment(cell.date).isBefore(minDate, 'day')) ||
                  (maxDate && moment(cell.date).isAfter(maxDate, 'day'));
                const isStart =
                  mode === 'range' &&
                  selectedRange?.startDate &&
                  isSameDay(cell.date, selectedRange.startDate);
                const isEnd =
                  mode === 'range' &&
                  selectedRange?.endDate &&
                  isSameDay(cell.date, selectedRange.endDate);
                const inMid =
                  mode === 'range' &&
                  selectedRange?.startDate &&
                  selectedRange?.endDate &&
                  isInRange(
                    cell.date,
                    selectedRange.startDate,
                    selectedRange.endDate,
                  );
                const isSelected =
                  mode === 'single' &&
                  selectedSingle &&
                  isSameDay(cell.date, selectedSingle);

                return (
                  <Pressable
                    key={`c-${cIdx}`}
                    onPress={() => {
                      if (isDisabled) return;
                      handleDayPress(cell.date);
                      if (!cell.isCurrentMonth) gotoMonthOf(cell.date);
                    }}
                    style={themed.cellBase}
                    accessibilityRole="button">
                    {inMid && !isStart && !isEnd && (
                      <View style={themed.rangeMid} />
                    )}
                    {isStart && selectedRange?.endDate && (
                      <View
                        style={{
                          ...(isRTL
                            ? themed.rangeHalfLeft
                            : themed.rangeHalfRight),
                          ...(isRTL ? themed.startCap : themed.endCap),
                          ...(selectedRange.endDate &&
                            (isRTL
                              ? themed.rangeHalfRight
                              : themed.rangeHalfLeft)),
                        }}
                      />
                    )}
                    {isEnd && (
                      <View
                        style={{
                          ...(isRTL
                            ? themed.rangeHalfRight
                            : themed.rangeHalfLeft),
                          ...(isRTL ? themed.endCap : themed.startCap),
                          ...(selectedRange.startDate &&
                            (isRTL
                              ? themed.rangeHalfLeft
                              : themed.rangeHalfRight)),
                        }}
                      />
                    )}
                    {isSelected || isStart || isEnd ? (
                      <View style={themed.selectedCircle}>
                        <Paragraph
                          testId={`${testId}-day-${cell.label}`}
                          size="md"
                          weight="Semibold"
                          isTranslated={false}
                          style={themed.selectedText}
                          text={String(cell.label)}
                        />
                      </View>
                    ) : (
                      <View
                        style={[
                          themed.normalOutline,
                          isToday && themed.todayOutline,
                        ]}>
                        <Paragraph
                          testId={`${testId}-day-${cell.label}`}
                          size="md"
                          isTranslated={false}
                          style={{
                            ...themed.cellText,
                            ...(isMuted || isDisabled ? themed.cellMuted : {}),
                          }}
                          text={String(cell.label)}
                        />
                      </View>
                    )}
                  </Pressable>
                );
              })}
            </View>
          ))}
        </View>
      </View>
    );
  };

  const renderMonths = () => {
    const monthIndex = getMonthIndex(visibleDate, calendarType);
    const centerYear =
      calendarType === 'hijri'
        ? moment(visibleDate).iYear()
        : moment(visibleDate).year();
    const range = 10; // years above/below to render for scrolling
    const years = Array.from(
      { length: range * 2 + 1 },
      (_, i) => centerYear - range + i,
    );

    return (
      <ScrollView
        style={themed.scrollArea}
        contentContainerStyle={themed.gridContainer}
        nestedScrollEnabled>
        {years.map((year) => (
          <View key={`year-${year}`}>
            <View style={themed.yearHeading}>
              <Paragraph
                testId={`${testId}-months-year-${year}`}
                isTranslated={false}
                size="md"
                weight="Semibold"
                text={`${year}`}
              />
            </View>
            <View style={themed.gridFlex}>
              {months.map((m, idx) => {
                const active = year === centerYear && idx === monthIndex;
                return (
                  <Pressable
                    key={`m-${year}-${idx}`}
                    onPress={() => {
                      let d = setYear(visibleDate, year, calendarType);
                      d = setMonth(d, idx, calendarType);
                      setVisibleDate(d);
                      setViewMode('calendar');
                    }}
                    style={[themed.monthItem, active && themed.selectedPill]}
                    accessibilityRole="button">
                    <Paragraph
                      testId={`${testId}-month-${idx}-${year}`}
                      isTranslated={false}
                      size="md"
                      weight="Semibold"
                      style={active ? themed.selectedPillText : undefined}
                      text={m}
                    />
                  </Pressable>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    );
  };

  const renderYears = () => {
    // build a range centered on the visible year
    const centerYear =
      calendarType === 'hijri'
        ? moment(visibleDate).iYear()
        : moment(visibleDate).year();
    const span = 40; // render many years to allow scrolling
    const years: number[] = [];
    for (let y = centerYear - span; y <= centerYear + span; y++) years.push(y);
    const activeYear = centerYear;
    return (
      <ScrollView
        style={themed.scrollArea}
        contentContainerStyle={themed.gridContainer}
        nestedScrollEnabled>
        <View style={themed.gridFlex}>
          {years.map((y) => {
            const active = y === activeYear;
            return (
              <Pressable
                key={`y-${y}`}
                onPress={() => {
                  setVisibleDate(setYear(visibleDate, y, calendarType));
                  setViewMode('months');
                }}
                style={[themed.yearItem, active && themed.selectedPill]}
                accessibilityRole="button">
                <Paragraph
                  testId={`${testId}-year-${y}`}
                  isTranslated={false}
                  size="md"
                  weight="Semibold"
                  style={active ? themed.selectedPillText : undefined}
                  text={`${y}`}
                />
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    );
  };

  const goPrevHeader = () => {
    if (viewMode === 'calendar') onPrev();
    else if (viewMode === 'months')
      setVisibleDate(addYears(visibleDate, -1, calendarType));
    else setVisibleDate(addYears(visibleDate, -18, calendarType));
  };

  const goNextHeader = () => {
    if (viewMode === 'calendar') onNext();
    else if (viewMode === 'months')
      setVisibleDate(addYears(visibleDate, 1, calendarType));
    else setVisibleDate(addYears(visibleDate, 18, calendarType));
  };

  return (
    <View style={[themed.container, containerStyle]}>
      {/* Header */}
      <View style={themed.headerRow}>
        <View style={themed.headerLeft}>
          <Pressable
            onPress={() =>
              setViewMode(
                viewMode === 'calendar'
                  ? 'months'
                  : viewMode === 'months'
                    ? 'years'
                    : 'calendar',
              )
            }
            accessibilityRole="button">
            <View>
              <Paragraph
                testId={`${testId}-title`}
                size="lg"
                weight="Semibold"
                isTranslated={false}
                style={themed.headerTitle}
                text={headerTitle}
              />
              <LucideIcon
                testId={`${testId}-open`}
                name="ChevronDown"
                size={18}
                color="foregroundQuaternary"
              />
            </View>
          </Pressable>
        </View>
        <View style={themed.headerActions}>
          {viewMode === 'calendar' && (
            <>
              <LucideIcon
                testId={`${testId}-prev`}
                name={'ChevronLeft'}
                isRTLMirrored
                onPress={goPrevHeader}
                color="foregroundQuaternary"
              />
              <LucideIcon
                testId={`${testId}-next`}
                name={'ChevronRight'}
                isRTLMirrored
                onPress={goNextHeader}
                color="foregroundQuaternary"
              />
            </>
          )}

          <Segmented
            value={calendarType}
            onChange={(t) => {
              setCalendarType(t);
              if (onCalendarTypeChange) onCalendarTypeChange(t);
            }}
            variant={labelVariant}
          />
        </View>
      </View>

      {viewMode === 'calendar' && renderCalendar()}
      {viewMode === 'months' && renderMonths()}
      {viewMode === 'years' && renderYears()}
    </View>
  );
};

export default DatePicker;
