# TabButton Component

An individual tab button component with glass morphism design that can be used independently or as part of the TabBar component. Follows atomic design principles as a true atom component.

## Features

- ✨ Glass morphism design with blur and shadow effects for selected state
- 🎨 Customizable icons using Lucide React Native
- 📱 Fully responsive with React Native scaling
- 🎯 Touch feedback with active opacity
- 🔄 Two distinct states: selected and default
- 💫 Automatic styling based on state

## Usage

### Basic Usage

```tsx
import React from 'react';
import { TabButton } from '@/components/atoms';

const MyComponent = () => {
  return (
    <TabButton
      id="home"
      icon="Home"
      isSelected={true}
      onPress={(id) => console.log('Button pressed:', id)}
    />
  );
};
```

### Toggle Button Example

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { TabButton } from '@/components/atoms';

const ToggleButtonExample = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <TabButton
        id="toggle"
        icon="Heart"
        isSelected={isSelected}
        onPress={() => setIsSelected(!isSelected)}
      />
    </View>
  );
};
```

### Multiple Independent Buttons

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { TabButton } from '@/components/atoms';

const MultiButtonExample = () => {
  const [selectedButtons, setSelectedButtons] = useState<Set<string>>(
    new Set(),
  );

  const handleButtonPress = (id: string) => {
    const newSelected = new Set(selectedButtons);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedButtons(newSelected);
  };

  return (
    <View style={{ flexDirection: 'row', gap: 10, padding: 20 }}>
      {['home', 'search', 'heart', 'user'].map((id) => (
        <TabButton
          key={id}
          id={id}
          icon={
            id === 'home'
              ? 'Home'
              : id === 'search'
                ? 'Search'
                : id === 'heart'
                  ? 'Heart'
                  : 'User'
          }
          isSelected={selectedButtons.has(id)}
          onPress={handleButtonPress}
        />
      ))}
    </View>
  );
};
```

## Props

### TabButtonProps

| Prop         | Type                   | Required | Default | Description                                 |
| ------------ | ---------------------- | -------- | ------- | ------------------------------------------- |
| `id`         | `string`               | ✅       | -       | Unique identifier for the button            |
| `icon`       | `keyof typeof icons`   | ✅       | -       | Lucide icon name to display                 |
| `isSelected` | `boolean`              | ❌       | `false` | Whether the button is in selected state     |
| `onPress`    | `(id: string) => void` | ✅       | -       | Callback function when button is pressed    |
| `style`      | `ViewStyle`            | ❌       | -       | Additional styling for the button container |

## States

### Selected State

- **Glass Background**: 62x62 pts glass morphism background with shadow
- **Button**: 54x54 pts circular button with light gray background
- **Icon**: Green accent color (`#55C490`) with 1.5pt stroke width
- **Positioning**: Glass background offset by -4pts on left/top

### Default State

- **Button**: 96x45 pts rounded rectangle button
- **Icon**: Dark gray color (`#0E2D3E`) with 1.5pt stroke width
- **Layout**: Centered icon with padding

## Design Specifications

### Dimensions

- **Selected button**: 54x54 pts
- **Selected glass background**: 62x62 pts
- **Default button**: 96x45 pts
- **Icon size**: 32x32 pts
- **Icon container**: 32x32 pts

### Colors

- **Selected icon**: `#55C490` (secondary-green-500)
- **Selected button background**: `#F2F2F2`
- **Selected glass background**: `#F7F7F7` with shadow
- **Default icon**: `#0E2D3E` (primary-700)

### Effects

- **Shadow**: Color `#000`, offset (0,2), opacity 0.1, radius 8
- **Elevation**: 4 (Android)
- **Border radius**: 1000 (perfect circles), 100 (rounded rectangles)
- **Active opacity**: 0.8

## Accessibility

- **Touch targets**: Meets minimum 44pt touch target requirements
- **Visual feedback**: Clear active opacity on press
- **State indication**: Distinct visual states for selected/unselected

## Integration with TabBar

This component is used internally by the `TabBar` molecule component:

```tsx
// Internal usage in TabBar
<TabButton
  id={item.id}
  icon={item.icon}
  isSelected={item.id === selectedTabId}
  onPress={onTabPress}
/>
```

## Customization

### Custom Container Styling

```tsx
<TabButton
  id="custom"
  icon="Star"
  isSelected={true}
  onPress={handlePress}
  style={{
    marginHorizontal: 10,
    transform: [{ scale: 1.1 }],
  }}
/>
```

### Theme Integration

The component automatically uses:

- Project's color constants via `COLORS`
- Responsive scaling via `responsiveHandler`
- Proper scaling functions from `@/theme`

## File Structure

```
src/components/atoms/tab-button/
├── index.tsx          # Main TabButton component
├── interface.ts       # TypeScript interfaces
├── styles.ts          # StyleSheet definitions
├── example.tsx        # Usage examples
└── README.md          # This documentation
```

## Dependencies

- `react-native` - Core React Native components (View, TouchableOpacity)
- `lucide-react-native` - Icon library
- `react-native-size-matters` - Responsive scaling
- Project's theme system (`@/theme`, `@/style`)
- `LucideIcon` component from atoms

## Related Components

- **TabBar** (Molecule): Composition that uses multiple TabButton components
- **LucideIcon**: Used internally for icon rendering
