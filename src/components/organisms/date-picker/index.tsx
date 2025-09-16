import React, { useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
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
  });

  const currentValue: DatePickerValue | undefined =
    value ?? (mode === 'single' ? internalSingle : internalRange);

  const asRange = (v?: DatePickerValue | null): RangeValue => {
    if (!v || typeof v === 'string')
      return { startDate: null, endDate: null } as unknown as RangeValue;
    if (v instanceof Date)
      return { startDate: null, endDate: null } as unknown as RangeValue;
    if ((v as any).startDate !== undefined) return v as RangeValue;
    return { startDate: null, endDate: null } as RangeValue;
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
    if (mode === 'single') {
      commitValue(toStart(d));
      return;
    }
    const current = asRange(currentValue);
    if (!current?.startDate || (current.startDate && current.endDate)) {
      commitValue({ startDate: toStart(d), endDate: null });
    } else if (current.startDate && !current.endDate) {
      const sorted = sortRange(current.startDate, toStart(d));
      commitValue(sorted);
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
                      // Commit selection first, then adjust visible month if needed
                      handleDayPress(cell.date);
                      if (!cell.isCurrentMonth) gotoMonthOf(cell.date);
                    }}
                    style={themed.cellBase}
                    accessibilityRole="button">
                    {/* range shade */}
                    {inMid && !isStart && !isEnd ? (
                      <View style={[themed.rangeMid]} />
                    ) : null}

                    {/* start cap */}
                    {isStart && selectedRange.endDate ? (
                      <View
                        style={[
                          isRTL ? themed.rangeHalfLeft : themed.rangeHalfRight,
                          isRTL ? themed.startCap : themed.endCap,
                        ]}
                      />
                    ) : null}
                    {/* end cap */}
                    {isEnd && selectedRange.startDate ? (
                      <View
                        style={[
                          isRTL ? themed.rangeHalfRight : themed.rangeHalfLeft,
                          isRTL ? themed.endCap : themed.startCap,
                        ]}
                      />
                    ) : null}

                    {/* circle selection */}
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
                          isToday ? themed.todayOutline : null,
                          { padding: 8, borderRadius: 18 },
                        ]}>
                        <Paragraph
                          testId={`${testId}-day-${cell.label}`}
                          size="md"
                          isTranslated={false}
                          style={[
                            themed.cellText,
                            (isMuted || isDisabled) && themed.cellMuted,
                          ]}
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
    const currentYear =
      calendarType === 'hijri'
        ? moment(visibleDate).iYear()
        : moment(visibleDate).year();
    const nextYearDate = addYears(visibleDate, 1, calendarType);
    const nextYear =
      calendarType === 'hijri'
        ? moment(nextYearDate).iYear()
        : moment(nextYearDate).year();

    type MonthRowItem =
      | { kind: 'header'; year: number }
      | { kind: 'month'; label: string; idx: number; year: number };

    const items: MonthRowItem[] = [];
    items.push({ kind: 'header', year: currentYear });
    months.forEach((m, idx) => items.push({ kind: 'month', label: m, idx, year: currentYear }));
    // append first 3 months of next year for design parity
    items.push({ kind: 'header', year: nextYear });
    months.slice(0, 3).forEach((m, idx) =>
      items.push({ kind: 'month', label: m, idx, year: nextYear }),
    );

    return (
      <View style={themed.gridContainer}>
        <View style={themed.gridFlex}>
          {items.map((it, pos) => {
            if (it.kind === 'header') {
              return (
                <View key={`y-${it.year}-${pos}`} style={themed.yearHeading}>
                  <Paragraph
                    testId={`${testId}-months-year-${it.year}`}
                    isTranslated={false}
                    size="md"
                    weight="Semibold"
                    text={`${it.year}`}
                  />
                </View>
              );
            }
            const active = it.year === currentYear && it.idx === monthIndex;
            return (
              <Pressable
                key={`m-${it.year}-${it.idx}`}
                onPress={() => {
                  let d = setYear(visibleDate, it.year, calendarType);
                  d = setMonth(d, it.idx, calendarType);
                  setVisibleDate(d);
                  setViewMode('calendar');
                }}
                style={[themed.monthItem, active && themed.selectedPill]}
                accessibilityRole="button">
                <Paragraph
                  testId={`${testId}-month-${it.idx}-${it.year}`}
                  isTranslated={false}
                  size="md"
                  weight="Semibold"
                  style={active ? themed.selectedPillText : undefined}
                  text={it.label}
                />
              </Pressable>
            );
          })}
        </View>
      </View>
    );
  };

  const renderYears = () => {
    // build a range centered on the visible year
    const centerYear =
      calendarType === 'hijri'
        ? moment(visibleDate).iYear()
        : moment(visibleDate).year();
    const years: number[] = [];
    // 18 items to fill 6 rows × 3 cols, avoids a missing middle slot
    for (let y = centerYear - 8; y <= centerYear + 9; y++) years.push(y);
    const activeYear = centerYear;
    return (
      <View style={themed.gridContainer}>
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
      </View>
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
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
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
