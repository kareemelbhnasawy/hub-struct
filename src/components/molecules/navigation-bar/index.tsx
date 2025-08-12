import React from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import NavigationTab from '../navigation-tab';

const NavigationBar: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <NavigationTab icon={'N'} isNews={true} />
      <View style={styles.capsule}>
        <NavigationTab icon={'H'} isNews={false} />
        <NavigationTab icon={'S'} isNews={false} />
        <NavigationTab icon={'A'} isNews={false} />
      </View>
    </View>
  );
};

export default NavigationBar;
