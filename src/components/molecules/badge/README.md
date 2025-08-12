# Badge Component

A flexible badge component with background containers that supports both text labels and numbers with multiple color variants and sizes, following the Figma design specifications.

## Features

- **Two Variants**: `number` and `label`
- **Multiple Colors**: `brand`, `success`, `warning`, `gray`, `error`
- **Three Sizes**: `sm`, `md`, `lg`
- **Background Containers**: Proper background colors and border radius
- **Responsive Border Radius**: Different radius for number vs label variants
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
<Badge testId="my-badge" variant="label" text="Label" color="brand" size="md" />
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

### All Size Variants

```tsx
{
  /* Small */
}
<Badge testId="badge" variant="label" text="Small" size="sm" />;

{
  /* Medium */
}
<Badge testId="badge" variant="label" text="Medium" size="md" />;

{
  /* Large */
}
<Badge testId="badge" variant="label" text="Large" size="lg" />;
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

| Prop      | Type                                                     | Default   | Description                          |
| --------- | -------------------------------------------------------- | --------- | ------------------------------------ |
| `testId`  | `string`                                                 | -         | Required test identifier for testing |
| `variant` | `'number' \| 'label'`                                    | -         | Badge content type                   |
| `text`    | `string`                                                 | -         | Text content to display              |
| `color`   | `'brand' \| 'success' \| 'warning' \| 'gray' \| 'error'` | `'brand'` | Badge color theme                    |
| `size`    | `'sm' \| 'md' \| 'lg'`                                   | `'md'`    | Badge size                           |
| `style`   | `StyleProp<TextStyle>`                                   | -         | Additional custom styles             |

## Typography

Text size and weight are now handled by the `Paragraph` component. The badge only applies color and variant-based text styles. To customize size or weight, use the `size` and `weight` props on `Paragraph` via the badge props.

## Accessibility

The component automatically provides:

- Appropriate `accessibilityRole="text"`
- Descriptive `accessibilityLabel` based on variant, color, and content
- Proper text contrast ratios

## Design Specifications

### Container & Border Radius

- **Number badges**: Fixed border radius of 12px for all sizes (circular appearance)
- **Label badges**: Variable border radius based on size (4px, 6px, 8px for sm, md, lg)
- **Background colors**: Uses theme-based background colors with proper contrast
- **Padding**: Responsive padding based on variant and size

### Typography

- **Font Family**: HRSD Gov (as specified in Figma)
- **Text size and weight**: Controlled by `Paragraph` props (`size`, `weight`)
- **Text color**: Controlled by badge color and variant

## Implementation Details

- Built with `View` container and `BaseText` for proper styling separation
- Uses the project's theming system (`getThemeColor`) for background/text colors
- Responsive handlers for consistent cross-platform behavior
- Follows the established component structure (interface, utils, styles)
- Maintains consistency with existing atoms and molecules patterns
