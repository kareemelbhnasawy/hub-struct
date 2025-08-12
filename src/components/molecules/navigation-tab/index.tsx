import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationTabProps } from './interface';
import { styles } from './styles';
import { findRelevantStyle } from './utils';
import { LucideIcon } from '@/components/atoms';
import { getThemeColor } from '@/theme';

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
      <LucideIcon name={icon} color={getThemeColor('iconBorderDefault')} />
    </TouchableOpacity>
  );
};

export default NavigationTab;
