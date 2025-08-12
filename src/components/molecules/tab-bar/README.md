# TabBar Component (Molecule)

A beautiful glass morphism tab bar component that follows atomic design principles. This molecule component recreates the design from the provided Figma mockup with a selected tab having a distinct glass morphism background and green accent color. It's composed of multiple TabButton atoms.

## Features

- ✨ Glass morphism design with blur and shadow effects
- 🎨 Customizable icons using Lucide React Native
- 📱 Fully responsive with React Native scaling
- 🎯 Touch feedback with active opacity
- 🎪 Follows atomic design principles
- 💫 Smooth selection state management

## Usage

### Basic Usage

```tsx
import React, { useState } from 'react';
import { TabBar } from '@/components/molecules';

const MyComponent = () => {
  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <TabBar
      items={[
        { id: 'news', icon: 'AlignRight' },
        { id: 'orders', icon: 'ClipboardCheck' },
        { id: 'service', icon: 'LayoutGrid' },
        { id: 'home', icon: 'Home' },
      ]}
      selectedTabId={selectedTab}
      onTabPress={(tabId) => setSelectedTab(tabId)}
    />
  );
};
```

### Advanced Usage with State Management

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { TabBar } from '@/components/molecules';
import { TabBarItem } from '@/components/molecules/tab-bar/interface';

const NavigationTabBar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navigationTabs: TabBarItem[] = [
    { id: 'home', icon: 'Home' },
    { id: 'search', icon: 'Search' },
    { id: 'favorites', icon: 'Heart' },
    { id: 'profile', icon: 'User' },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    // Add your navigation logic here
    console.log('Navigating to:', tabId);
  };

  return (
    <View style={{ backgroundColor: '#F2F2F2', padding: 20 }}>
      <TabBar
        items={navigationTabs}
        selectedTabId={activeTab}
        onTabPress={handleTabChange}
        style={{ marginVertical: 10 }}
      />
    </View>
  );
};
```

## Props

### TabBarProps

| Prop            | Type                      | Required | Description                             |
| --------------- | ------------------------- | -------- | --------------------------------------- |
| `items`         | `TabBarItem[]`            | ✅       | Array of tab items to display           |
| `selectedTabId` | `string`                  | ✅       | ID of the currently selected tab        |
| `onTabPress`    | `(tabId: string) => void` | ✅       | Callback function when a tab is pressed |
| `style`         | `ViewStyle`               | ❌       | Additional styling for the container    |

### TabBarItem

| Prop   | Type                 | Required | Description                   |
| ------ | -------------------- | -------- | ----------------------------- |
| `id`   | `string`             | ✅       | Unique identifier for the tab |
| `icon` | `keyof typeof icons` | ✅       | Lucide icon name to display   |

## Available Icons

The component supports all Lucide React Native icons. Here are some commonly used ones for navigation:

- `Home` - Home/Dashboard
- `Search` - Search functionality
- `Heart` - Favorites/Likes
- `User` - Profile/Account
- `ShoppingCart` - Shopping/Cart
- `Bell` - Notifications
- `Settings` - Settings/Preferences
- `ClipboardCheck` - Orders/Tasks
- `LayoutGrid` - Services/Grid view
- `AlignRight` - News/Articles

## Design Details

### Glass Morphism Effect

- Semi-transparent backgrounds with blur effects
- Subtle shadows for depth
- Rounded corners (border radius 1000 for perfect circles)

### Color Scheme

- Selected tab: Green accent (`#55C490`) with light gray background (`#F2F2F2`)
- Default tabs: Dark gray icons (`#0E2D3E`) on glass background
- Glass background: Light gray (`#F7F7F7`) with shadow effects

### Dimensions

- Selected tab button: 54x54 pts with 62x62 pts glass background
- Default tab buttons: 96x45 pts
- Icons: 32x32 pts with 1.5pt stroke width
- Glass tab bar background: 276x53 pts

## Accessibility

The component includes:

- Touch feedback with `activeOpacity={0.8}`
- Proper touch target sizes (minimum 44pt recommended)
- Clear visual distinction between selected and unselected states

## Customization

### Custom Styles

```tsx
<TabBar
  items={tabs}
  selectedTabId={selectedTab}
  onTabPress={handleTabPress}
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 25,
    marginHorizontal: 20,
  }}
/>
```

### Theme Integration

The component automatically uses the project's theme colors through the `COLORS` constant and `responsiveHandler` for proper scaling across different screen sizes.

## File Structure

```
src/components/molecules/tab-bar/
├── index.tsx          # Main TabBar component (Molecule)
├── interface.ts       # TypeScript interfaces
├── styles.ts          # Container StyleSheet definitions
├── example.tsx        # Usage example
└── README.md          # This documentation

src/components/atoms/tab-button/
├── index.tsx          # Individual TabButton component (Atom)
├── interface.ts       # TabButton TypeScript interfaces
├── styles.ts          # TabButton StyleSheet definitions
└── example.tsx        # TabButton usage example
```

## Component Architecture

The TabBar component follows atomic design principles:

- **TabButton** (Atom): Individual tab button with selected/default states
- **TabBar** (Molecule): Composition of multiple TabButton atoms with container logic

## TabButton Component

The TabBar internally uses the `TabButton` component, which can also be used independently:

```tsx
import { TabButton } from '@/components/atoms';

<TabButton
  id="home"
  icon="Home"
  isSelected={true}
  onPress={(id) => console.log('Button pressed:', id)}
/>;
```

### TabButton Props

| Prop         | Type                   | Required | Description                              |
| ------------ | ---------------------- | -------- | ---------------------------------------- |
| `id`         | `string`               | ✅       | Unique identifier for the button         |
| `icon`       | `keyof typeof icons`   | ✅       | Lucide icon name to display              |
| `isSelected` | `boolean`              | ❌       | Whether the button is in selected state  |
| `onPress`    | `(id: string) => void` | ✅       | Callback function when button is pressed |
| `style`      | `ViewStyle`            | ❌       | Additional styling for the button        |

## Dependencies

- `react-native` - Core React Native components
- `lucide-react-native` - Icon library
- `react-native-size-matters` - Responsive scaling
- Project's theme system (`@/theme`, `@/style`)
- `TabButton` component (internal dependency)
