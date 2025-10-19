import { tokens } from "@tamagui/themes";
import { createTokens } from "@tamagui/core";
import {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
  breakpoints,
  zIndex,
  grid,
  layout,
} from "./tokens";

// Create Tamagui tokens from our design system
export const customTokens = createTokens({
  ...tokens,
  color: {
    ...tokens.color,
    // Primary colors
    primary: colors.primary[500],
    primaryHover: colors.primary[600],
    primaryActive: colors.primary[700],
    primaryLight: colors.primary[100],
    primaryDark: colors.primary[800],

    // Secondary colors
    secondary: colors.secondary[500],
    secondaryHover: colors.secondary[600],
    secondaryActive: colors.secondary[700],
    secondaryLight: colors.secondary[100],
    secondaryDark: colors.secondary[800],

    // Success colors
    success: colors.success[500],
    successHover: colors.success[600],
    successActive: colors.success[700],
    successLight: colors.success[100],
    successDark: colors.success[800],

    // Warning colors
    warning: colors.warning[500],
    warningHover: colors.warning[600],
    warningActive: colors.warning[700],
    warningLight: colors.warning[100],
    warningDark: colors.warning[800],

    // Error colors
    error: colors.error[500],
    errorHover: colors.error[600],
    errorActive: colors.error[700],
    errorLight: colors.error[100],
    errorDark: colors.error[800],

    // Neutral colors
    white: colors.neutral[0],
    black: colors.neutral[1000],
    gray50: colors.neutral[50],
    gray100: colors.neutral[100],
    gray200: colors.neutral[200],
    gray300: colors.neutral[300],
    gray400: colors.neutral[400],
    gray500: colors.neutral[500],
    gray600: colors.neutral[600],
    gray700: colors.neutral[700],
    gray800: colors.neutral[800],
    gray900: colors.neutral[900],

    // Background colors
    background: colors.background.primary,
    backgroundSecondary: colors.background.secondary,
    backgroundTertiary: colors.background.tertiary,

    // Text colors
    textPrimary: colors.text.primary,
    textSecondary: colors.text.secondary,
    textTertiary: colors.text.tertiary,
    textInverse: colors.text.inverse,
    textDisabled: colors.text.disabled,

    // Border colors
    border: colors.border.primary,
    borderSecondary: colors.border.secondary,
    borderFocus: colors.border.focus,
    borderError: colors.border.error,

    // Figma-specific colors
    figmaMaster: colors.figma.master,
    figmaMasterBg: colors.figma.masterBg,
    figmaMasterBorder: colors.figma.masterBorder,
    figmaBadgeSelected: colors.figma.badgeSelected,
    figmaBadgeSelectedBorder: colors.figma.badgeSelectedBorder,
    figmaBadgeUnselected: colors.figma.badgeUnselected,
    figmaBadgeUnselectedBorder: colors.figma.badgeUnselectedBorder,
    figmaButtonPrimary: colors.figma.buttonPrimary,
    figmaButtonSecondary: colors.figma.buttonSecondary,
    figmaCardBackground: colors.figma.cardBackground,
    figmaCardBorder: colors.figma.cardBorder,
    figmaThumbnailBg: colors.figma.thumbnailBg,
  },

  space: {
    ...tokens.space,
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
    xl: spacing.xl,
    "2xl": spacing["2xl"],
    "3xl": spacing["3xl"],
    "4xl": spacing["4xl"],
    "5xl": spacing["5xl"],
    "6xl": spacing["6xl"],
    "7xl": spacing["7xl"],
    "8xl": spacing["8xl"],
  },

  radius: {
    ...tokens.radius,
    xs: borderRadius.xs,
    sm: borderRadius.sm,
    md: borderRadius.md,
    lg: borderRadius.lg,
    xl: borderRadius.xl,
    "2xl": borderRadius["2xl"],
    "3xl": borderRadius["3xl"],
    full: borderRadius.full,
  },

  size: {
    ...tokens.size,
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
    xl: spacing.xl,
    "2xl": spacing["2xl"],
    "3xl": spacing["3xl"],
    "4xl": spacing["4xl"],
    "5xl": spacing["5xl"],
    "6xl": spacing["6xl"],
    "7xl": spacing["7xl"],
    "8xl": spacing["8xl"],
  },

  font: {
    ...tokens.font,
    body: typography.fontFamily.sans,
    heading: typography.fontFamily.sans,
    mono: typography.fontFamily.mono,
  },

  fontSize: {
    ...tokens.fontSize,
    xs: typography.fontSize.xs,
    sm: typography.fontSize.sm,
    base: typography.fontSize.base,
    lg: typography.fontSize.lg,
    xl: typography.fontSize.xl,
    "2xl": typography.fontSize["2xl"],
    "3xl": typography.fontSize["3xl"],
    "4xl": typography.fontSize["4xl"],
    "5xl": typography.fontSize["5xl"],
    "6xl": typography.fontSize["6xl"],
    "7xl": typography.fontSize["7xl"],
    "8xl": typography.fontSize["8xl"],
    "9xl": typography.fontSize["9xl"],
  },
});

// Light theme
export const lightTheme = {
  ...tokens.color,
  primary: colors.primary[500],
  primaryHover: colors.primary[600],
  primaryActive: colors.primary[700],
  primaryLight: colors.primary[100],
  primaryDark: colors.primary[800],

  secondary: colors.secondary[500],
  secondaryHover: colors.secondary[600],
  secondaryActive: colors.secondary[700],
  secondaryLight: colors.secondary[100],
  secondaryDark: colors.secondary[800],

  success: colors.success[500],
  successHover: colors.success[600],
  successActive: colors.success[700],
  successLight: colors.success[100],
  successDark: colors.success[800],

  warning: colors.warning[500],
  warningHover: colors.warning[600],
  warningActive: colors.warning[700],
  warningLight: colors.warning[100],
  warningDark: colors.warning[800],

  error: colors.error[500],
  errorHover: colors.error[600],
  errorActive: colors.error[700],
  errorLight: colors.error[100],
  errorDark: colors.error[800],

  background: colors.background.primary,
  backgroundSecondary: colors.background.secondary,
  backgroundTertiary: colors.background.tertiary,

  text: colors.text.primary,
  textSecondary: colors.text.secondary,
  textTertiary: colors.text.tertiary,
  textInverse: colors.text.inverse,
  textDisabled: colors.text.disabled,

  border: colors.border.primary,
  borderSecondary: colors.border.secondary,
  borderFocus: colors.border.focus,
  borderError: colors.border.error,
};

// Dark theme
export const darkTheme = {
  ...lightTheme,
  primary: colors.primary[400],
  primaryHover: colors.primary[300],
  primaryActive: colors.primary[200],
  primaryLight: colors.primary[800],
  primaryDark: colors.primary[100],

  secondary: colors.secondary[400],
  secondaryHover: colors.secondary[300],
  secondaryActive: colors.secondary[200],
  secondaryLight: colors.secondary[800],
  secondaryDark: colors.secondary[100],

  success: colors.success[400],
  successHover: colors.success[300],
  successActive: colors.success[200],
  successLight: colors.success[800],
  successDark: colors.success[100],

  warning: colors.warning[400],
  warningHover: colors.warning[300],
  warningActive: colors.warning[200],
  warningLight: colors.warning[800],
  warningDark: colors.warning[100],

  error: colors.error[400],
  errorHover: colors.error[300],
  errorActive: colors.error[200],
  errorLight: colors.error[800],
  errorDark: colors.error[100],

  background: colors.neutral[900],
  backgroundSecondary: colors.neutral[800],
  backgroundTertiary: colors.neutral[700],

  text: colors.neutral[100],
  textSecondary: colors.neutral[300],
  textTertiary: colors.neutral[400],
  textInverse: colors.neutral[900],
  textDisabled: colors.neutral[600],

  border: colors.neutral[700],
  borderSecondary: colors.neutral[600],
  borderFocus: colors.primary[400],
  borderError: colors.error[400],
};

export const config = {
  tokens: customTokens,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
};
