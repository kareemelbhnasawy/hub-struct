# Toast Component

A customizable toast notification component built with `toastify-react-native` integration, following the project's design system and supporting RTL/LTR layouts.

## Current Implementation Status

**Fixed Issues:**

- ✅ Proper toastify-react-native usage with `config` prop instead of `render`
- ✅ Simplified icon implementation using LucideIcon components
- ✅ Corrected data passing between ToastService and Toast component
- ✅ Better TypeScript typing for icon names

## Features

- ✅ Four toast types: `success`, `error`, `info`, `warning`
- ✅ RTL/LTR support with automatic text alignment
- ✅ Customizable action button
- ✅ Close button functionality
- ✅ Themed styling using project's color system
- ✅ Auto-hide functionality
- ✅ Custom duration support

## Usage

### Basic Usage (Recommended)

```tsx
import { ToastService } from '@/components/molecules';

// Simple usage
ToastService.success('Operation completed successfully!');
ToastService.error('Something went wrong. Please try again.');
ToastService.info('New updates are available.');
ToastService.warning('Your session will expire soon.');
```

### Advanced Configuration

```tsx
import { ToastService } from '@/components/molecules';

// With duration
ToastService.success('Success message', {
  duration: 5000,
});

// Hide all toasts
ToastService.hide();
```

### Direct Component Usage

```tsx
import { Toast } from '@/components/molecules';

<Toast
  testId="my-toast"
  type="success"
  message="Direct toast usage"
  showAction={true}
  showClose={true}
  onActionPress={() => console.log('Action pressed')}
  onClosePress={() => console.log('Close pressed')}
/>;
```

## Implementation Details

### Icons Used

- **Success**: `CheckCircle` (Lucide)
- **Error**: `XCircle` (Lucide)
- **Info**: `Info` (Lucide)
- **Warning**: `AlertTriangle` (Lucide)
- **Close**: `X` (Lucide)

### Toast Provider Configuration

The component uses `toastify-react-native`'s `config` prop to map each toast type to a custom component:

```tsx
const toastConfig = {
  success: SuccessToast,
  error: ErrorToast,
  info: InfoToast,
  warn: WarningToast,
};

<ToastManager config={toastConfig} />;
```

## Troubleshooting

### Icons Not Rendering

If icons show as question marks:

1. Check if `lucide-react-native` is properly installed
2. Verify icon names match available Lucide icons
3. Check console for import/rendering errors

### Empty Toast Messages

If toasts appear empty:

1. Verify message is passed correctly to ToastService methods
2. Check that `text1` prop is being received in custom toast components
3. Ensure Paragraph component is working correctly

### Toast Not Appearing

If toasts don't show at all:

1. Verify ToastProvider is wrapped around your app
2. Check console for toastify-react-native errors
3. Ensure ToastManager is properly configured

## Dependencies

- `toastify-react-native`: ^7.2.3
- `lucide-react-native`: ^0.536.0
- `react-native-svg`: ^15.12.1

## Setup

The `ToastProvider` must be wrapped around your app root:

```tsx
import { ToastProvider } from '@/components/molecules';

export default function App() {
  return <ToastProvider>{/* Your app content */}</ToastProvider>;
}
```

## Testing

Use the included test components:

- `SimpleToastTest`: Tests individual icons and basic toast functionality
- `ToastDemo`: Complete demo with all variations

## Design System Integration

The toast component follows the project's design patterns:

- **Colors**: Uses theme colors for consistent appearance
- **Typography**: Uses project's `Paragraph` component with HRSD Gov font
- **Icons**: Uses project's `LucideIcon` component
- **Styling**: Themed styles with responsive design
