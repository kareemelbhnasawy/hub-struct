// WheelPicker.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

type WPProps<T = string | number> = {
  data: T[];
  selectedIndex: number;
  onIndexChange: (i: number) => void;
  itemHeight?: number;
  visibleCount?: number;
  columnWidth?: number;
  cyclic?: boolean; // NEW
  renderItem?: (item: T, sel: boolean) => React.ReactNode;
};

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(v, b));

export function WheelPicker<T = string | number>({
  data,
  selectedIndex,
  onIndexChange,
  itemHeight = 44,
  visibleCount = 5,
  columnWidth = 72,
  cyclic = true,
  renderItem,
}: WPProps<T>) {
  const listRef = useRef<FlatList>(null);
  const [ready, setReady] = useState(false);

  // Build cyclic dataset
  const baseLen = data.length;
  const MULT = cyclic ? 100 : 1; // repeat 100x
  const CENTER_BLOCK = Math.floor(MULT / 2);
  const TOTAL = baseLen * MULT;

  const repeated = useMemo(
    () =>
      cyclic
        ? Array.from({ length: TOTAL }, (_, i) => data[i % baseLen])
        : data,
    [cyclic, TOTAL, data, baseLen],
  );

  const initial = cyclic
    ? CENTER_BLOCK * baseLen + selectedIndex
    : selectedIndex;

  // Scroll to correct offset when selectedIndex changes (or on mount)
  useEffect(() => {
    if (!ready) return;
    const offset =
      (cyclic ? CENTER_BLOCK * baseLen + selectedIndex : selectedIndex) *
      itemHeight;
    listRef.current?.scrollToOffset({ offset, animated: true });
  }, [selectedIndex, itemHeight, ready, cyclic, baseLen]);

  const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { y } = e.nativeEvent.contentOffset;
    const raw = Math.round(y / itemHeight);

    if (cyclic) {
      // keep anchor in the middle
      const blk = Math.floor(raw / baseLen);
      const norm = ((raw % baseLen) + baseLen) % baseLen; // 0..baseLen-1
      if (blk <= 1 || blk >= MULT - 2) {
        const centerIdx = CENTER_BLOCK * baseLen + norm;
        requestAnimationFrame(() =>
          listRef.current?.scrollToOffset({
            offset: centerIdx * itemHeight,
            animated: false,
          }),
        );
      }
      if (norm !== selectedIndex) onIndexChange(norm);
      return;
    }

    const idx = clamp(raw, 0, baseLen - 1);
    if (idx !== selectedIndex) onIndexChange(idx);
  };

  const pad = ((visibleCount - 1) / 2) * itemHeight;

  return (
    <View style={{ height: itemHeight * visibleCount, width: columnWidth }}>
      {/* highlight */}
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
        data={repeated as any}
        keyExtractor={(_, i) => String(i)}
        onLayout={() => {
          setReady(true);
          // jump to initial without animation so fling feels natural
          listRef.current?.scrollToOffset({
            offset: initial * itemHeight,
            animated: false,
          });
        }}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
        snapToAlignment="start"
        decelerationRate="fast" // allows multiple-row fling
        overScrollMode="never"
        getItemLayout={(_, i) => ({
          length: itemHeight,
          offset: i * itemHeight,
          index: i,
        })}
        contentContainerStyle={{ paddingTop: pad, paddingBottom: pad }}
        renderItem={({ item, index }) => {
          // compute selection visually (center row)
          // We rely on highlight bar; text weight is optional.
          const sel = false;
          return (
            <View
              style={{
                height: itemHeight,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {renderItem ? (
                renderItem(item as T, sel)
              ) : (
                <Text style={styles.item}>{String(item)}</Text>
              )}
            </View>
          );
        }}
        onMomentumScrollEnd={onMomentumEnd}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: { fontSize: 22, color: '#7a848c' },
});
