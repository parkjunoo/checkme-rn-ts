import { useMemo } from "react";
import { Dimensions } from "react-native";
import { colors, spacing, grid, layout, typography } from "../theme/tokens";
import {
  getSpacing,
  getGridColumnWidth,
  getGridPosition,
  getContainerWidth,
  getComponentSize,
  isMobile,
  isTablet,
  isDesktop,
  getScreenDimensions,
  getButtonStyles,
  getInputStyles,
  getCardStyles,
  createGridLayout,
  createSpacing,
  createMargin,
} from "../theme/utils";

/**
 * Design System Hook
 * Provides easy access to design system tokens and utilities
 */
export const useDesignSystem = () => {
  const screenData = Dimensions.get("window");
  const { width, height } = screenData;

  const designSystem = useMemo(
    () => ({
      // Tokens
      colors,
      spacing,
      grid,
      layout,
      typography,

      // Screen info
      screen: {
        width,
        height,
        isMobile: isMobile(width),
        isTablet: isTablet(width),
        isDesktop: isDesktop(width),
      },

      // Utilities
      utils: {
        getSpacing,
        getGridColumnWidth,
        getGridPosition,
        getContainerWidth,
        getComponentSize,
        getScreenDimensions,
        getButtonStyles,
        getInputStyles,
        getCardStyles,
        createGridLayout,
        createSpacing,
        createMargin,
      },

      // Common styles
      styles: {
        button: getButtonStyles(),
        input: getInputStyles(),
        card: getCardStyles(),
      },

      // Responsive helpers
      responsive: {
        mobile: (mobileStyles: any, otherStyles?: any) =>
          isMobile(width) ? mobileStyles : otherStyles,
        tablet: (tabletStyles: any, otherStyles?: any) =>
          isTablet(width) ? tabletStyles : otherStyles,
        desktop: (desktopStyles: any, otherStyles?: any) =>
          isDesktop(width) ? desktopStyles : otherStyles,
      },
    }),
    [width, height]
  );

  return designSystem;
};

// Export individual hooks for specific use cases
export const useColors = () => {
  const { colors } = useDesignSystem();
  return colors;
};

export const useSpacing = () => {
  const { spacing, utils } = useDesignSystem();
  return { spacing, getSpacing: utils.getSpacing };
};

export const useGrid = () => {
  const { grid, utils } = useDesignSystem();
  return {
    grid,
    getGridColumnWidth: utils.getGridColumnWidth,
    getGridPosition: utils.getGridPosition,
    createGridLayout: utils.createGridLayout,
  };
};

export const useLayout = () => {
  const { layout, utils } = useDesignSystem();
  return {
    layout,
    getContainerWidth: utils.getContainerWidth,
    getComponentSize: utils.getComponentSize,
  };
};

export const useResponsive = () => {
  const { screen, responsive } = useDesignSystem();
  return { screen, responsive };
};
