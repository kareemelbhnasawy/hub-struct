import React, { useState } from 'react';
import { View } from 'react-native';
import TabButton from './index';
import { Headline } from '@/components/atoms';

const TabButtonExample = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonPress = (id: string) => {
    setSelectedButton(selectedButton === id ? null : id);
    console.log('TabButton pressed:', id);
  };

  return (
    <View
      style={{
        backgroundColor: '#F2F2F2',
        borderRadius: 20,
        padding: 20,
        margin: 20,
        gap: 20,
      }}>
      <Headline text="TAB BUTTONS" />

      <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
        <TabButton
          id="home"
          icon="Home"
          isSelected={selectedButton === 'home'}
          onPress={handleButtonPress}
        />

        <TabButton
          id="search"
          icon="Search"
          isSelected={selectedButton === 'search'}
          onPress={handleButtonPress}
        />

        <TabButton
          id="heart"
          icon="Heart"
          isSelected={selectedButton === 'heart'}
          onPress={handleButtonPress}
        />

        <TabButton
          id="user"
          icon="User"
          isSelected={selectedButton === 'user'}
          onPress={handleButtonPress}
        />
      </View>
    </View>
  );
};

export default TabButtonExample;
