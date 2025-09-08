/* eslint-disable react-native/no-inline-styles */
import CustomTopTabsWithIcon, { TopTab } from '@/components/organisms/top-tabs';
import { View, Text } from 'react-native';

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Content</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings Content</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Content</Text>
  </View>
);

const DummyScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Dummy Content</Text>
  </View>
);
const tabs: TopTab[] = [
  {
    key: 'Home',
    label: 'هوم',
    iconName: 'Hamburger',
    component: HomeScreen,
  },
  {
    key: 'Settings',
    label: 'تنظیمات',
    iconName: 'Settings',
    component: SettingsScreen,
  },
  {
    key: 'Profile',
    label: 'پروفایل',
    iconName: 'User',
    component: ProfileScreen,
  },
  {
    key: 'سبسبس',
    label: 'محتوای آزمایشی',
    iconName: 'FileText',
    component: DummyScreen,
  },
];

const DemoTopTabs = () => <CustomTopTabsWithIcon tabs={tabs} />;

export default DemoTopTabs;
