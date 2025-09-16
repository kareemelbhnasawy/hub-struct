// IOSLikeTimePicker.tsx
import React, { useMemo, useEffect, useState } from 'react';
import { View, Text, I18nManager, StyleSheet } from 'react-native';
import { WheelPicker } from './wheel-picker';

type Props = {
  value?: Date;
  onChange?: (d: Date) => void;
  minuteStep?: number;
  is24Hour?: boolean;
  locale?: string;
  amLabel?: string;
  pmLabel?: string;
  itemHeight?: number;
  visibleCount?: number;
  rtl?: boolean;
};

export const IOSLikeTimePicker: React.FC<Props> = ({
  value,
  onChange,
  minuteStep = 1,
  is24Hour = false,
  locale,
  amLabel,
  pmLabel,
  itemHeight = 44,
  visibleCount = 5,
  rtl,
}) => {
  const now = value ?? new Date();
  const l = locale ?? undefined;

  // Localized number + zero for padding
  const fmt = useMemo(() => new Intl.NumberFormat(l), [l]);
  const zero = fmt.format(0).slice(-1);
  const pad2 = (n: number) => {
    const s = fmt.format(n);
    return s.length >= 2 ? s : zero + s; // ✅ localized padding
  };

  const hours = useMemo(
    () =>
      is24Hour
        ? Array.from({ length: 24 }, (_, i) => i)
        : Array.from({ length: 12 }, (_, i) => i + 1),
    [is24Hour],
  );
  const minutes = useMemo(
    () =>
      Array.from(
        { length: Math.ceil(60 / minuteStep) },
        (_, i) => (i * minuteStep) % 60,
      ),
    [minuteStep],
  );

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

  // initial indices
  const init = useMemo(() => {
    let h = now.getHours();
    let period = 0;
    if (!is24Hour) {
      period = h >= 12 ? 1 : 0;
      h = h % 12;
      if (h === 0) h = 12;
    }
    const hourIdx = is24Hour ? h : hours.indexOf(h);
    const m = now.getMinutes();
    const minIdx = minutes.indexOf(
      minutes.reduce((p, c) => (Math.abs(c - m) < Math.abs(p - m) ? c : p)),
    );
    return { hourIdx, minIdx, period };
  }, [now, hours, minutes, is24Hour]);

  const [hourIdx, setHourIdx] = useState(init.hourIdx);
  const [minIdx, setMinIdx] = useState(init.minIdx);
  const [periodIdx, setPeriodIdx] = useState(init.period);

  // emit
  useEffect(() => {
    const d = new Date(now);
    let h = hours[hourIdx] ?? 0;
    const m = minutes[minIdx] ?? 0;
    if (!is24Hour) h = periodIdx === 0 ? h % 12 : (h % 12) + 12;
    d.setHours(h, m, 0, 0);
    onChange?.(d);
  }, [hourIdx, minIdx, periodIdx]);

  const isRTL = rtl ?? I18nManager.isRTL;

  return (
    <View style={[s.row, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
      <WheelPicker
        data={hours.map((h) => fmt.format(h))}
        selectedIndex={hourIdx}
        onIndexChange={setHourIdx}
        itemHeight={itemHeight}
        visibleCount={visibleCount}
        cyclic // ✅ infinite + multi-fling
        columnWidth={72}
        renderItem={(t, sel) => <Text style={[s.txt, sel && s.sel]}>{t}</Text>}
      />
      <View
        style={{ width: 16, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={[s.sep]}>:</Text>
      </View>
      <WheelPicker
        data={minutes.map(pad2)} // ✅ localized 00–59
        selectedIndex={minIdx}
        onIndexChange={setMinIdx}
        itemHeight={itemHeight}
        visibleCount={visibleCount}
        cyclic // ✅ cycles 59→00
        columnWidth={72}
        renderItem={(t, sel) => <Text style={[s.txt, sel && s.sel]}>{t}</Text>}
      />
      {!is24Hour && (
        <WheelPicker
          data={[amText, pmText]}
          selectedIndex={periodIdx}
          onIndexChange={setPeriodIdx}
          itemHeight={itemHeight}
          visibleCount={visibleCount}
          cyclic={false} // AM/PM usually not cyclic
          columnWidth={96}
          renderItem={(t, sel) => (
            <Text style={[s.txt, sel && s.sel]}>{t}</Text>
          )}
        />
      )}
    </View>
  );
};

const s = StyleSheet.create({
  row: { alignItems: 'center' },
  txt: { fontSize: 22, color: '#7a848c' },
  sel: { color: '#0c2c3a', fontWeight: '700' },
  sep: { fontSize: 22, fontWeight: '700', color: '#0c2c3a' },
});

export default IOSLikeTimePicker;
