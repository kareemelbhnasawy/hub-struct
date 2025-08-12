import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationTabProps } from './interface';
import { styles } from './styles';
import { findRelevantStyle } from './utils';

const NavigationTab: React.FC<NavigationTabProps> = ({
  icon,
  isNews = false,
  isMiddleTab = false,
}) => {
  const [isActive, setIsActive] = useState(false);

  const onPress = () => {
    setIsActive(!isActive);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.bg,
        findRelevantStyle(isActive, isNews),
        isMiddleTab && styles.centerTab,
      ]}>
      <Text style={[styles.text, isNews ? styles.whiteIcon : styles.blueIcon]}>
        {icon}
      </Text>
    </TouchableOpacity>
  );
};

export default NavigationTab;
