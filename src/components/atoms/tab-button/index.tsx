import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { LucideIcon } from '@/components/atoms';
import { COLORS } from '@/style';
import TabButtonProps from './interface';
import { styles } from './styles';

const TabButton = ({
  id,
  icon,
  isSelected = false,
  onPress,
  style,
}: TabButtonProps) => {
  if (isSelected) {
    return (
      <View style={[styles.selectedContainer, style]}>
        <View style={styles.selectedGlassBackground} />
        <TouchableOpacity
          style={styles.selectedButton}
          onPress={() => onPress(id)}
          activeOpacity={0.8}>
          <View style={styles.iconContainer}>
            <LucideIcon
              name={icon}
              size={32}
              color={COLORS['secondary-green-500']}
              strokeWidth={1.5}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.defaultButton, style]}
      onPress={() => onPress(id)}
      activeOpacity={0.8}>
      <View style={styles.iconContainer}>
        <LucideIcon
          name={icon}
          size={32}
          color={COLORS['primary-700']}
          strokeWidth={1.5}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TabButton;
