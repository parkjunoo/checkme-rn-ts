import { spacing, grid, layout } from "./tokens";

/**
 * Design System Utilities
 * Based on Figma design system
 */

// Spacing utilities
export const getSpacing = (size: keyof typeof spacing) => spacing[size];

// Grid utilities
export const getGridColumnWidth = (columns: number = 1) => {
  const totalGutters = (columns - 1) * grid.gutter;
  return grid.columnWidth * columns + totalGutters;
};

export const getGridPosition = (column: number, totalColumns: number = 1) => {
  const startPosition =
    grid.margin + (column - 1) * (grid.columnWidth + grid.gutter);
  return {
    left: startPosition,
    width: getGridColumnWidth(totalColumns),
  };
};

// Layout utilities
export const getContainerWidth = (
  breakpoint: keyof typeof layout.container
) => {
  return layout.container[breakpoint];
};

export const getComponentSize = (component: keyof typeof layout.component) => {
  return layout.component[component];
};

// Responsive utilities
export const isMobile = (width: number) => width < grid.breakpoints.sm;
export const isTablet = (width: number) =>
  width >= grid.breakpoints.sm && width < grid.breakpoints.lg;
export const isDesktop = (width: number) => width >= grid.breakpoints.lg;

// Screen utilities
export const getScreenDimensions = () => ({
  width: grid.screen.width,
  height: grid.screen.height,
});

// Component utilities
export const getButtonStyles = () => ({
  height: layout.component.button.height,
  paddingHorizontal: layout.component.button.padding,
});

export const getInputStyles = () => ({
  height: layout.component.input.height,
  paddingHorizontal: layout.component.input.padding,
});

export const getCardStyles = () => ({
  padding: layout.component.card.padding,
  borderRadius: layout.component.card.borderRadius,
});

// Grid system for components
export const createGridLayout = (
  columns: number,
  gap: number = grid.gutter
) => {
  const columnWidth = 100 / columns - (gap * (columns - 1)) / columns;
  return {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    gap,
    "& > *": {
      width: `${columnWidth}%`,
    },
  };
};

// Spacing helpers
export const createSpacing = (
  top?: number,
  right?: number,
  bottom?: number,
  left?: number
) => {
  if (
    top !== undefined &&
    right === undefined &&
    bottom === undefined &&
    left === undefined
  ) {
    return {
      paddingTop: top,
      paddingRight: top,
      paddingBottom: top,
      paddingLeft: top,
    };
  }
  if (
    top !== undefined &&
    right !== undefined &&
    bottom === undefined &&
    left === undefined
  ) {
    return {
      paddingTop: top,
      paddingRight: right,
      paddingBottom: top,
      paddingLeft: right,
    };
  }
  if (
    top !== undefined &&
    right !== undefined &&
    bottom !== undefined &&
    left === undefined
  ) {
    return {
      paddingTop: top,
      paddingRight: right,
      paddingBottom: bottom,
      paddingLeft: right,
    };
  }
  return {
    paddingTop: top || 0,
    paddingRight: right || 0,
    paddingBottom: bottom || 0,
    paddingLeft: left || 0,
  };
};

// Margin helpers
export const createMargin = (
  top?: number,
  right?: number,
  bottom?: number,
  left?: number
) => {
  if (
    top !== undefined &&
    right === undefined &&
    bottom === undefined &&
    left === undefined
  ) {
    return {
      marginTop: top,
      marginRight: top,
      marginBottom: top,
      marginLeft: top,
    };
  }
  if (
    top !== undefined &&
    right !== undefined &&
    bottom === undefined &&
    left === undefined
  ) {
    return {
      marginTop: top,
      marginRight: right,
      marginBottom: top,
      marginLeft: right,
    };
  }
  if (
    top !== undefined &&
    right !== undefined &&
    bottom !== undefined &&
    left === undefined
  ) {
    return {
      marginTop: top,
      marginRight: right,
      marginBottom: bottom,
      marginLeft: right,
    };
  }
  return {
    marginTop: top || 0,
    marginRight: right || 0,
    marginBottom: bottom || 0,
    marginLeft: left || 0,
  };
};
