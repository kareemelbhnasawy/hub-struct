import React from 'react';
import { View, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useThemeStore } from '@/store/theme';
import { icons } from 'lucide-react-native';
import { styles } from './styles';
import { LucideIcon, Paragraph } from '@/components/atoms';
// import { useTranslate } from '@/hooks';

export type TopTab = {
  key: string;
  label: string;
  iconName: keyof typeof icons;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
};

type Props = {
  tabs: TopTab[];
};

const Tab = createMaterialTopTabNavigator();

/**
 * Material Top Tabs styled to match our design system.
 * - Uses LucideIcon for `tabBarIcon` and Paragraph for `tabBarLabel`.
 * - Applies themed colors, slim rounded indicator, and RTL-friendly layout.
 */
const CustomTopTabsWithIcon: React.FC<Props> = ({ tabs }) => {
  const { getThemeColor, getThemedStyles } = useThemeStore();
  const themed = getThemedStyles(styles);
  // const { isRTL } = useTranslate();

  const activeColor = getThemeColor('foregroundBrandPrimary');
  const inactiveColor = getThemeColor('foregroundQuaternary');

  const isScrollable = tabs.length > 3;
  const itemWidth = Dimensions.get('window').width / 3; // show max 3 tabs per screen

  return (
    <Tab.Navigator
      style={themed.container}
      initialLayout={{ width: Dimensions.get('window').width }}
      // General bar styles and behavior
      screenOptions={{
        swipeEnabled: false,
        tabBarScrollEnabled: isScrollable,
        lazy: true,
        tabBarShowIcon: false,
        tabBarItemStyle: isScrollable
          ? [themed.tabItem, { width: itemWidth }]
          : themed.tabItem,
        tabBarStyle: themed.tabBar,
        tabBarIndicatorStyle: themed.indicator,
        tabBarGap: 0,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarPressColor: getThemeColor('backgroundBrandPrimaryLight'),
        tabBarPressOpacity: 0.7,
      }}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.key}
          name={tab.key}
          component={tab.component}
          options={{
            // Custom label that includes the icon inline beside text
            tabBarLabel: ({ color, focused, children }) => (
              <View style={themed.labelRow}>
                <LucideIcon
                  testId={`tab-${tab.key}-icon`}
                  name={tab.iconName}
                  size={18}
                  color={
                    focused ? 'foregroundBrandPrimary' : 'foregroundQuaternary'
                  }
                />
                <Paragraph
                  testId={`tab-${tab.key}-label`}
                  size="lg"
                  weight={focused ? 'Bold' : 'Medium'}
                  style={{ color }}
                  text={
                    (typeof children === 'string' ? children : tab.label) ??
                    tab.label
                  }
                />
              </View>
            ),
            tabBarShowLabel: true,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default CustomTopTabsWithIcon;
