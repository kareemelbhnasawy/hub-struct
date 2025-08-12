import React from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import NavigationTab from '../navigation-tab';
import LinearGradient from 'react-native-linear-gradient';
import { getThemeColor } from '@/theme';

const NavigationBar: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={[
          getThemeColor('backgroundWhite'),
          getThemeColor('backgroundNeutral200'),
        ]} // start → end colors
        start={{ x: 1, y: 1 }} // top-left
        end={{ x: 1, y: 0 }} // bottom-right
        style={styles.circle}>
        <NavigationTab icon={'AlignRight'} isNews />
      </LinearGradient>
      <LinearGradient
        colors={[
          getThemeColor('backgroundWhite'),
          getThemeColor('backgroundNeutral200'),
        ]} // start → end colors
        start={{ x: 1, y: 1 }} // top-left
        end={{ x: 1, y: 0 }} // bottom-right
        style={styles.capsule}>
        <NavigationTab icon={'ClipboardCheck'} />
        <NavigationTab icon={'Search'} isMiddleTab />
        <NavigationTab icon={'House'} />
      </LinearGradient>
    </View>
  );
};

export default NavigationBar;
