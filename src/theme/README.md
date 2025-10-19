# Design System

This design system is based on the Figma design specifications and provides a comprehensive set of tokens, utilities, and components for consistent UI development.

## Overview

The design system follows a 4/8/16 spacing system and includes:
- Color tokens based on Figma design
- Spacing and grid system
- Typography scale
- Component specifications
- Responsive utilities

## Usage

### Basic Usage

```tsx
import { useDesignSystem } from '../hooks/useDesignSystem';

const MyComponent = () => {
  const { colors, spacing, utils } = useDesignSystem();
  
  return (
    <View style={{
      backgroundColor: colors.figma.cardBackground,
      padding: spacing.lg,
      borderRadius: 16,
    }}>
      <Text style={{ color: colors.text.primary }}>
        Hello World
      </Text>
    </View>
  );
};
```

### Using Specific Hooks

```tsx
import { useColors, useSpacing, useGrid } from '../hooks/useDesignSystem';

const MyComponent = () => {
  const colors = useColors();
  const { spacing, getSpacing } = useSpacing();
  const { grid, getGridColumnWidth } = useGrid();
  
  // Use the design system tokens
};
```

## Color System

### Primary Colors
- `primary.500`: #328FEE (Main primary color from Figma)
- `primary.600`: #2563EB
- `primary.700`: #1D4ED8

### Figma-Specific Colors
- `figma.master`: #328FEE (Master status color)
- `figma.masterBg`: #D9ECFC (Master background)
- `figma.masterBorder`: #B4DBFC (Master border)
- `figma.badgeSelected`: #D9ECFC (Selected badge background)
- `figma.badgeUnselected`: #FFFFFF (Unselected badge background)
- `figma.buttonPrimary`: #191F2A (Primary button color)
- `figma.buttonSecondary`: #616977 (Secondary button color)
- `figma.cardBackground`: #FFFFFF (Card background)
- `figma.cardBorder`: #E1E5EA (Card border)
- `figma.thumbnailBg`: #B4DBFC (Thumbnail background)

### Text Colors
- `text.primary`: #191F2A (Main text color)
- `text.secondary`: #616977 (Secondary text color)
- `text.tertiary`: #8C96A2 (Tertiary text color)

### Background Colors
- `background.primary`: #FFFFFF (Main background)
- `background.secondary`: #F1F4F7 (Secondary background)

## Spacing System

Based on 4/8/16 system:
- `xs`: 4px
- `sm`: 8px
- `md`: 12px
- `lg`: 16px
- `xl`: 20px
- `2xl`: 24px
- `3xl`: 32px
- `4xl`: 40px
- `5xl`: 48px
- `6xl`: 64px
- `7xl`: 80px
- `8xl`: 96px

## Grid System

5-column grid system based on Figma:
- Screen width: 375px (iPhone X/XS/11 Pro)
- Columns: 5
- Column width: 59px
- Gutter: 12px
- Margins: 16px

## Typography

Font family: SUIT (as specified in Figma)
- Font sizes: 12px to 128px
- Font weights: 100 to 900
- Line heights: 1 to 2
- Letter spacing: -0.05 to 0.1

## Component Specifications

### Buttons
- Height: 48px
- Padding: 16px horizontal
- Border radius: 8px

### Inputs
- Height: 48px
- Padding: 16px horizontal
- Border radius: 8px

### Cards
- Padding: 16px
- Border radius: 16px
- Border: 1px solid #E1E5EA

## Responsive Design

The design system includes responsive utilities:
- `isMobile(width)`: Check if screen is mobile
- `isTablet(width)`: Check if screen is tablet
- `isDesktop(width)`: Check if screen is desktop

## Utilities

### Spacing Utilities
- `getSpacing(size)`: Get spacing value
- `createSpacing(top, right, bottom, left)`: Create padding object
- `createMargin(top, right, bottom, left)`: Create margin object

### Grid Utilities
- `getGridColumnWidth(columns)`: Get width for number of columns
- `getGridPosition(column, totalColumns)`: Get position for column
- `createGridLayout(columns, gap)`: Create grid layout styles

### Component Utilities
- `getButtonStyles()`: Get standard button styles
- `getInputStyles()`: Get standard input styles
- `getCardStyles()`: Get standard card styles

## Best Practices

1. **Use Design System Tokens**: Always use tokens instead of hardcoded values
2. **Consistent Spacing**: Use the 4/8/16 spacing system
3. **Responsive Design**: Use responsive utilities for different screen sizes
4. **Component Consistency**: Use component utilities for consistent styling
5. **Color Semantics**: Use semantic color names (primary, secondary, etc.)

## Examples

### Creating a Card Component

```tsx
import { useDesignSystem } from '../hooks/useDesignSystem';

const Card = ({ children }) => {
  const { colors, spacing, utils } = useDesignSystem();
  const cardStyles = utils.getCardStyles();
  
  return (
    <View style={{
      ...cardStyles,
      backgroundColor: colors.figma.cardBackground,
      borderColor: colors.figma.cardBorder,
    }}>
      {children}
    </View>
  );
};
```

### Creating a Button Component

```tsx
import { useDesignSystem } from '../hooks/useDesignSystem';

const Button = ({ children, variant = 'primary' }) => {
  const { colors, utils } = useDesignSystem();
  const buttonStyles = utils.getButtonStyles();
  
  const backgroundColor = variant === 'primary' 
    ? colors.figma.buttonPrimary 
    : colors.figma.buttonSecondary;
  
  return (
    <TouchableOpacity style={{
      ...buttonStyles,
      backgroundColor,
      borderRadius: 8,
    }}>
      <Text style={{ color: colors.text.inverse }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
```

### Using Grid System

```tsx
import { useGrid } from '../hooks/useDesignSystem';

const GridLayout = () => {
  const { createGridLayout } = useGrid();
  
  return (
    <View style={createGridLayout(2, 16)}>
      <View>Column 1</View>
      <View>Column 2</View>
    </View>
  );
};
```
