# Toast Component

A customizable toast notification component built with `toastify-react-native` integration, following the project's design system and supporting RTL/LTR layouts.

## Features

- ✅ Four toast types: `success`, `error`, `info`, `warning`
- ✅ RTL/LTR support with automatic text alignment
- ✅ Customizable action button
- ✅ Close button functionality
- ✅ Themed styling using project's color system
- ✅ Auto-hide functionality
- ✅ Custom duration support

## Usage

### Basic Usage

```tsx
import { ToastService } from '@/components/molecules';

// Show different types of toasts
ToastService.success('Operation completed successfully!');
ToastService.error('Something went wrong. Please try again.');
ToastService.info('New updates are available.');
ToastService.warning('Your session will expire soon.');
```

### Advanced Usage

```tsx
import { ToastService } from '@/components/molecules';

// With custom options
ToastService.success('Success message', {
  duration: 5000,
  isRTL: true,
  showAction: true,
  actionLabel: 'إجراء',
  onActionPress: () => {
    console.log('Action pressed');
  },
});

// Custom configuration
ToastService.show({
  type: 'info',
  message: 'Custom toast with all options',
  isRTL: false,
  showAction: true,
  showClose: true,
  actionLabel: 'Custom Action',
  onActionPress: () => {
    // Handle action
  },
  duration: 4000,
});
```

### Direct Component Usage

```tsx
import { Toast } from '@/components/molecules';

<Toast
  testId="my-toast"
  type="success"
  message="Direct toast usage"
  isRTL={false}
  showAction={true}
  showClose={true}
  actionLabel="Action"
  onActionPress={() => console.log('Action pressed')}
  onClosePress={() => console.log('Close pressed')}
/>;
```

## Props

### ToastProps Interface

| Prop            | Type                                          | Default                | Description                           |
| --------------- | --------------------------------------------- | ---------------------- | ------------------------------------- |
| `testId`        | `string`                                      | **Required**           | Test identifier for testing           |
| `type`          | `'success' \| 'error' \| 'info' \| 'warning'` | **Required**           | Toast type determines icon and colors |
| `message`       | `string`                                      | **Required**           | Message text to display               |
| `isRTL`         | `boolean`                                     | `false`                | Enable RTL layout and text alignment  |
| `showAction`    | `boolean`                                     | `true`                 | Show/hide action button               |
| `showClose`     | `boolean`                                     | `true`                 | Show/hide close button                |
| `actionLabel`   | `string`                                      | `'Action'` or `'اكشن'` | Text for action button                |
| `onActionPress` | `() => void`                                  | `undefined`            | Action button press handler           |
| `onClosePress`  | `() => void`                                  | `undefined`            | Close button press handler            |
| `messageProps`  | `Omit<ParagraphProps, 'testId' \| 'text'>`    | `undefined`            | Props for message text                |
| `actionProps`   | `Omit<ParagraphProps, 'testId' \| 'text'>`    | `undefined`            | Props for action text                 |

### ToastService Methods

| Method      | Signature                                                   | Description                        |
| ----------- | ----------------------------------------------------------- | ---------------------------------- |
| `show()`    | `(config: ToastConfig) => void`                             | Show toast with full configuration |
| `success()` | `(message: string, options?: Partial<ToastConfig>) => void` | Show success toast                 |
| `error()`   | `(message: string, options?: Partial<ToastConfig>) => void` | Show error toast                   |
| `info()`    | `(message: string, options?: Partial<ToastConfig>) => void` | Show info toast                    |
| `warning()` | `(message: string, options?: Partial<ToastConfig>) => void` | Show warning toast                 |
| `hide()`    | `() => void`                                                | Hide all active toasts             |

## Setup

The `ToastProvider` must be wrapped around your app root:

```tsx
import { ToastProvider } from '@/components/molecules';

export default function App() {
  return <ToastProvider>{/* Your app content */}</ToastProvider>;
}
```

## Design System Integration

The toast component follows the project's design patterns:

- **Colors**: Uses theme colors for consistent appearance across light/dark modes
- **Typography**: Uses the project's `Paragraph` component with HRSD Gov font
- **Icons**: Custom SVG icons matching the design specifications
- **Styling**: Themed styles with responsive design
- **RTL Support**: Proper text alignment and layout direction

## Accessibility

- All interactive elements have proper `accessibilityRole`
- Test IDs are provided for automated testing
- Keyboard navigation support through pressable elements
- Screen reader friendly with proper semantic structure

## Examples

See `demo.tsx` for a complete working example with all toast types and configurations.
