# Badge Component

A flexible badge component that supports both text labels and numbers with multiple color variants and sizes, following the Figma design specifications.

## Features

- **Two Variants**: `number` and `label`
- **Multiple Colors**: `brand`, `success`, `warning`, `gray`, `error`
- **Three Sizes**: `sm`, `md`, `lg`
- **RTL Support**: Configurable text direction
- **Accessibility**: Built-in accessibility labels and roles

## Color Specifications

The colors match the Figma design exactly:
- **Brand**: #0F3144 (Primary-600)
- **Success**: #067647 (Success-700)
- **Warning**: #B54708 (Warning-700)
- **Error**: #D92D20 (Error-600)
- **Gray**: #384250 (Neutral-700) for labels, #575757 (Secondary-dark-gray-800) for numbers

## Usage Examples

### Basic Label Badge
```tsx
<Badge 
  testId="my-badge"
  variant="label"
  text="Label"
  color="brand"
  size="md"
/>
```

### Number Badge
```tsx
<Badge 
  testId="notification-count"
  variant="number"
  text="9"
  color="error"
  size="sm"
/>
```

### RTL Support
```tsx
<Badge 
  testId="arabic-badge"
  variant="label"
  text="عنوان"
  color="success"
  size="lg"
  rtl={true}
/>
```

### All Size Variants
```tsx
{/* Small */}
<Badge testId="badge" variant="label" text="Small" size="sm" />

{/* Medium */}
<Badge testId="badge" variant="label" text="Medium" size="md" />

{/* Large */}
<Badge testId="badge" variant="label" text="Large" size="lg" />
```

### All Color Variants
```tsx
<Badge testId="badge" variant="label" text="Brand" color="brand" />
<Badge testId="badge" variant="label" text="Success" color="success" />
<Badge testId="badge" variant="label" text="Warning" color="warning" />
<Badge testId="badge" variant="label" text="Error" color="error" />
<Badge testId="badge" variant="label" text="Gray" color="gray" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `testId` | `string` | - | Required test identifier for testing |
| `variant` | `'number' \| 'label'` | - | Badge content type |
| `text` | `string` | - | Text content to display |
| `color` | `'brand' \| 'success' \| 'warning' \| 'gray' \| 'error'` | `'brand'` | Badge color theme |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Badge size |
| `rtl` | `boolean` | `false` | Right-to-left text direction |
| `style` | `StyleProp<TextStyle>` | - | Additional custom styles |

## Typography Specifications

### Label Variant
- **Font Weight**: Medium (500)
- **Size SM**: 11px / 12px line-height
- **Size MD**: 12px / 16px line-height  
- **Size LG**: 14px / 18px line-height

### Number Variant
- **Font Weight**: Bold (700)
- **Size SM**: 14px / 18px line-height
- **Size MD**: 16px / 20px line-height
- **Size LG**: 18px / 22px line-height

## Accessibility

The component automatically provides:
- Appropriate `accessibilityRole="text"`
- Descriptive `accessibilityLabel` based on variant, color, and content
- Proper text contrast ratios

## Implementation Details

- Built on top of `BaseText` component for consistent text handling
- Uses the project's theming system and responsive handler
- Follows the established component structure (interface, utils, styles)
- Maintains consistency with existing atoms and molecules patterns
