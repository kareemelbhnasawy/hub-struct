import React, { useState } from 'react';
import { View } from 'react-native';
import TabBar from './index';
import { TabBarItem } from './interface';

const TabBarExample = () => {
  const [selectedTab, setSelectedTab] = useState('news');

  const tabItems: TabBarItem[] = [
    { id: 'news', icon: 'AlignRight' },
    { id: 'orders', icon: 'ClipboardCheck' },
    { id: 'service', icon: 'LayoutGrid' },
    { id: 'home', icon: 'Home' },
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
        selectedTabId={selectedTab}
        onTabPress={handleTabPress}
      />
    </View>
  );
};

export default TabBarExample;
