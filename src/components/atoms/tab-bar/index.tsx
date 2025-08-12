import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { LucideIcon } from '@/components/atoms';
import { COLORS } from '@/style';
import TabBarProps from './interface';
import { styles } from './styles';

const TabBar = ({ items, onTabPress, style }: TabBarProps) => {
  const selectedItem = items.find(item => item.isSelected);
  const defaultItems = items.filter(item => !item.isSelected);

  return (
    <View style={[styles.container, style]}>
      {selectedItem && (
        <View style={styles.selectedTabContainer}>
          <View style={styles.glassMorphBackground} />
          <TouchableOpacity
            style={styles.selectedTabButton}
            onPress={() => onTabPress(selectedItem.id)}
            activeOpacity={0.8}
          >
            <View style={styles.iconContainer}>
              <LucideIcon
                name={selectedItem.icon}
                size={32}
                color={COLORS['secondary-green-500']}
                strokeWidth={1.5}
              />
            </View>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.tabBarButtonsContainer}>
        <View style={styles.tabBarGlassBackground} />
        {defaultItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.defaultTabButton}
            onPress={() => onTabPress(item.id)}
            activeOpacity={0.8}
          >
            <View style={styles.iconContainer}>
              <LucideIcon
                name={item.icon}
                size={32}
                color={COLORS['primary-700']}
                strokeWidth={1.5}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TabBar;
