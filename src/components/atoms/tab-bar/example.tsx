import React, { useState } from 'react';
import { View } from 'react-native';
import TabBar from './index';
import { TabBarItem } from './interface';

const TabBarExample = () => {
  const [selectedTab, setSelectedTab] = useState('news');

  const tabItems: TabBarItem[] = [
    { id: 'news', icon: 'AlignRight', isSelected: selectedTab === 'news' },
    { id: 'orders', icon: 'ClipboardCheck', isSelected: selectedTab === 'orders' },
    { id: 'service', icon: 'LayoutGrid', isSelected: selectedTab === 'service' },
    { id: 'home', icon: 'Home', isSelected: selectedTab === 'home' },
  ];

  const handleTabPress = (tabId: string) => {
    setSelectedTab(tabId);
    console.log('Selected tab:', tabId);
  };

  return (
    <View style={{ 
      backgroundColor: '#F2F2F2', 
      borderRadius: 20, 
      padding: 20,
      margin: 20 
    }}>
      <TabBar
        items={tabItems}
        onTabPress={handleTabPress}
      />
    </View>
  );
};

export default TabBarExample;
