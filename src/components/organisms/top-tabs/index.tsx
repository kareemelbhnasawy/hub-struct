import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useThemeStore } from '@/store/theme';
import { icons } from 'lucide-react-native';
import styles from './styles';
import { LucideIcon, Paragraph } from '@/components/atoms';
import { useTranslate } from '@/hooks';
import { RNStyle } from '@/types/themes';

export type TopTab = {
  key: string;
  label: string;
  iconName: keyof typeof icons;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
};
type Props = { tabs: TopTab[]; contentContainerStyle?: RNStyle };

const Tab = createMaterialTopTabNavigator();

const CustomTopTabsWithIcon: React.FC<Props> = ({
  tabs,
  contentContainerStyle,
}) => {
  const { getThemeColor, getThemedStyles } = useThemeStore();
  const themed = getThemedStyles(styles);
  const { isRTL } = useTranslate();

  const activeColor = getThemeColor('foregroundBrandPrimary');
  const inactiveColor = getThemeColor('foregroundQuaternary');

  const isScrollable = tabs.length > 3;
  const itemWidth = Dimensions.get('window').width / 3;

  // read LTR indicator shape so RTL matches exactly
  const ind = StyleSheet.flatten(themed.indicator) || {};
  const IND_BG = ind.backgroundColor ?? getThemeColor('foregroundBrandPrimary');

  return (
    <Tab.Navigator
      style={themed.container}
      initialLayout={{ width: Dimensions.get('window').width }}
      screenOptions={{
        swipeEnabled: false,
        tabBarScrollEnabled: isScrollable,
        lazy: true,
        tabBarShowIcon: false,
        animationEnabled: false,
        tabBarItemStyle: isScrollable
          ? [themed.tabItem, { width: itemWidth }]
          : themed.tabItem,
        tabBarStyle: themed.tabBar,
        tabBarIndicatorStyle: isRTL ? { height: 0 } : themed.indicator, // hide real one only in RTL
        tabBarGap: 0,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarPressColor: getThemeColor('backgroundBrandPrimaryLight'),
        tabBarPressOpacity: 0.7,
        sceneStyle: [themed.contentContainer, contentContainerStyle],
      }}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.key}
          name={tab.key}
          component={tab.component}
          options={{
            tabBarShowLabel: true,
            tabBarLabel: ({ color, focused, children }) => (
              <View style={themed.tabLabelContainer}>
                <View style={themed.labelRow}>
                  <LucideIcon
                    testId={`tab-${tab.key}-icon`}
                    name={tab.iconName}
                    size={18}
                    color={
                      focused
                        ? 'foregroundBrandPrimary'
                        : 'foregroundQuaternary'
                    }
                  />
                  <Paragraph
                    testId={`tab-${tab.key}-label`}
                    size="lg"
                    weight={'Medium'}
                    style={{ color }}
                    text={
                      (typeof children === 'string' ? children : tab.label) ??
                      tab.label
                    }
                  />
                </View>

                {/* 👇 absolute, full-tab underline (no animation), RTL only */}
                {isRTL && focused ? (
                  <View
                    style={[
                      tabs.length < 3
                        ? themed.rtlIndicator
                        : themed.rtlIndicator3,
                      { backgroundColor: IND_BG },
                    ]}
                  />
                ) : null}
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default CustomTopTabsWithIcon;
