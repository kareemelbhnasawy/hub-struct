import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  I18nManager,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

/********************
 * Generic WheelPicker
 ********************/
interface WheelPickerProps<T = string | number> {
  data: T[];
  selectedIndex: number;
  onIndexChange: (index: number) => void;
  itemHeight?: number; // px
  visibleCount?: number; // odd number recommended (e.g., 5 or 7)
  style?: any;
  renderItem?: (item: T, isSelected: boolean) => React.ReactNode;
  testID?: string;
}

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(v, max));

export function WheelPicker<T = string | number>({
  data,
  selectedIndex,
  onIndexChange,
  itemHeight = 44,
  visibleCount = 5,
  style,
  renderItem,
  testID,
}: WheelPickerProps<T>) {
  const listRef = useRef<FlatList>(null);
  const [listReady, setListReady] = useState(false);

  const contentPadding = useMemo(() => {
    const pad = ((visibleCount - 1) / 2) * itemHeight;
    return { paddingTop: pad, paddingBottom: pad };
  }, [visibleCount, itemHeight]);

  useEffect(() => {
    if (!listReady) return;
    listRef.current?.scrollToOffset({
      offset: selectedIndex * itemHeight,
      animated: true,
    });
  }, [selectedIndex, itemHeight, listReady]);

  const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { y } = e.nativeEvent.contentOffset;
    const raw = Math.round(y / itemHeight);
    const index = clamp(raw, 0, Math.max(0, data.length - 1));
    if (index !== selectedIndex) onIndexChange(index);
  };

  return (
    <View style={[{ height: itemHeight * visibleCount, width: 'auto' }, style]}>
      {/* highlight bar */}
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: (itemHeight * visibleCount - itemHeight) / 2,
          height: itemHeight,
          backgroundColor: '#e8edf0',
          borderRadius: 12,
        }}
      />

      <FlatList
        ref={listRef}
        data={data as any}
        keyExtractor={(_, i) => String(i)}
        showsVerticalScrollIndicator={false}
        onLayout={() => setListReady(true)}
        onMomentumScrollEnd={onMomentumEnd}
        onScrollEndDrag={onMomentumEnd}
        snapToInterval={itemHeight}
        decelerationRate="fast"
        getItemLayout={(_, index) => ({
          length: itemHeight,
          offset: itemHeight * index,
          index,
        })}
        contentContainerStyle={contentPadding}
        renderItem={({ item, index }) => (
          <View
            style={{
              height: itemHeight,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {renderItem ? (
              renderItem(item as T, index === selectedIndex)
            ) : (
              <Text
                style={[
                  styles.itemText,
                  index === selectedIndex && styles.itemTextSelected,
                ]}>
                {String(item)}
              </Text>
            )}
          </View>
        )}
        testID={testID}
      />
    </View>
  );
}

/********************
 * iOS-like Time Picker
 ********************/
export interface IOSLikeTimePickerProps {
  value?: Date; // default: now
  onChange?: (date: Date) => void; // fires when any wheel stops
  minuteStep?: number; // default 1
  is24Hour?: boolean; // default false (uses AM/PM)
  locale?: string; // for digits/labels; defaults to device
  amLabel?: string; // default localized
  pmLabel?: string; // default localized
  itemHeight?: number;
  visibleCount?: number;
  textStyle?: any;
  rtl?: boolean; // force layout direction
}

export const IOSLikeTimePicker: React.FC<IOSLikeTimePickerProps> = ({
  value,
  onChange,
  minuteStep = 1,
  is24Hour = false,
  locale,
  amLabel,
  pmLabel,
  itemHeight = 44,
  visibleCount = 5,
  textStyle,
  rtl,
}) => {
  const now = value ?? new Date();

  // Build wheels
  const hours = useMemo(() => {
    if (is24Hour) return Array.from({ length: 24 }, (_, i) => i);
    return Array.from({ length: 12 }, (_, i) => i + 1); // 1..12
  }, [is24Hour]);

  const minutes = useMemo(() => {
    const count = Math.ceil(60 / minuteStep);
    return Array.from({ length: count }, (_, i) => (i * minuteStep) % 60);
  }, [minuteStep]);

  const l = locale ?? undefined;
  const formatter = useMemo(() => new Intl.NumberFormat(l), [l]);
  const amText =
    amLabel ??
    (new Intl.DateTimeFormat(l, { hour: 'numeric', hour12: true })
      .formatToParts(new Date(2020, 0, 1, 1, 0))
      .find((p) => p.type === 'dayPeriod')?.value ||
      'AM');
  const pmText =
    pmLabel ??
    (new Intl.DateTimeFormat(l, { hour: 'numeric', hour12: true })
      .formatToParts(new Date(2020, 0, 1, 13, 0))
      .find((p) => p.type === 'dayPeriod')?.value ||
      'PM');

  // Selected indices from provided value
  const init = useMemo(() => {
    let h = now.getHours();
    let periodIdx = 0; // 0 AM, 1 PM
    if (!is24Hour) {
      periodIdx = h >= 12 ? 1 : 0;
      h = h % 12;
      if (h === 0) h = 12;
    }
    const hourIdx = is24Hour ? h : hours.indexOf(h);
    const m = now.getMinutes();
    const minIdx = minutes.indexOf(
      minutes.reduce((prev, cur) =>
        Math.abs(cur - m) < Math.abs(prev - m) ? cur : prev,
      ),
    );
    return { hourIdx, minIdx, periodIdx };
  }, [now, hours, minutes, is24Hour]);

  const [hourIdx, setHourIdx] = useState(init.hourIdx);
  const [minIdx, setMinIdx] = useState(init.minIdx);
  const [periodIdx, setPeriodIdx] = useState(init.periodIdx);

  useEffect(() => {
    // Emit composed date
    const base = new Date(now);
    let hourVal = hours[hourIdx] ?? 0;
    const minuteVal = minutes[minIdx] ?? 0;

    if (is24Hour) {
      // 0..23
    } else {
      // 12h to 24h conversion
      if (periodIdx === 0) {
        // AM
        hourVal = hourVal % 12; // 12 AM => 0
      } else {
        // PM
        hourVal = (hourVal % 12) + 12; // 12 PM => 12
      }
    }

    base.setHours(hourVal, minuteVal, 0, 0);
    onChange?.(base);
  }, [hourIdx, minIdx, periodIdx]);

  const isRTL = rtl ?? I18nManager.isRTL;

  const Column = ({ children }: { children: React.ReactNode }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {children}
    </View>
  );

  return (
    <View
      style={[styles.row, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
      {/* Hours */}
      <WheelPicker
        data={hours.map((h) => formatter.format(h)) as any}
        selectedIndex={hourIdx}
        onIndexChange={setHourIdx}
        itemHeight={itemHeight}
        visibleCount={visibleCount}
        renderItem={(t, sel) => (
          <Text
            style={[
              styles.itemText,
              textStyle,
              sel && styles.itemTextSelected,
            ]}>
            {t}
          </Text>
        )}
        testID="hours"
      />

      {/* Separator */}
      <View
        style={{ width: 12, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={[styles.sep, textStyle]}>:</Text>
      </View>

      {/* Minutes */}
      <WheelPicker
        data={minutes.map((m) => formatter.format(m).padStart(2, '0')) as any}
        selectedIndex={minIdx}
        onIndexChange={setMinIdx}
        itemHeight={itemHeight}
        visibleCount={visibleCount}
        renderItem={(t, sel) => (
          <Text
            style={[
              styles.itemText,
              textStyle,
              sel && styles.itemTextSelected,
            ]}>
            {t}
          </Text>
        )}
        testID="minutes"
      />

      {/* AM/PM */}
      {!is24Hour && (
        <WheelPicker
          data={[amText, pmText] as any}
          selectedIndex={periodIdx}
          onIndexChange={setPeriodIdx}
          itemHeight={itemHeight}
          visibleCount={visibleCount}
          renderItem={(t, sel) => (
            <Text
              style={[
                styles.itemText,
                textStyle,
                sel && styles.itemTextSelected,
              ]}>
              {t}
            </Text>
          )}
          testID="period"
        />
      )}
    </View>
  );
};

/********************
 * Styles & helpers
 ********************/
const styles = StyleSheet.create({
  row: { alignItems: 'center' },
  itemText: { fontSize: 22, color: '#7a848c' },
  itemTextSelected: { color: '#0c2c3a', fontWeight: '700' },
  sep: { fontSize: 22, fontWeight: '700', color: '#0c2c3a' },
});

export default IOSLikeTimePicker;
/********************
 * Example usage
 ********************/
// import { IOSLikeTimePicker } from './IOS-likeTimePicker';
//
// export default function Example() {
//   const [date, setDate] = useState(new Date());
//   return (
//     <View style={{ padding: 16 }}>
//       <IOSLikeTimePicker
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
