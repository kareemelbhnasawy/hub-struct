import React from 'react';
import { View } from 'react-native';
import { TabButton } from '@/components/atoms';
import TabBarProps from './interface';
import { styles } from './styles';

const TabBar = ({ items, selectedTabId, onTabPress, style }: TabBarProps) => {
  const selectedItem = items.find(item => item.id === selectedTabId);
  const defaultItems = items.filter(item => item.id !== selectedTabId);

  return (
    <View style={[styles.container, style]}>
      {selectedItem && (
        <TabButton
          id={selectedItem.id}
          icon={selectedItem.icon}
          isSelected={true}
          onPress={onTabPress}
        />
      )}

      <View style={styles.tabBarButtonsContainer}>
        <View style={styles.tabBarGlassBackground} />
        {defaultItems.map((item) => (
          <TabButton
            key={item.id}
            id={item.id}
            icon={item.icon}
            isSelected={false}
            onPress={onTabPress}
          />
        ))}
      </View>
    </View>
  );
};

export default TabBar;
