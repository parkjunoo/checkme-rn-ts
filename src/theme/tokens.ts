// Design Tokens based on Figma Design System
export const colors = {
  // Primary Colors - Based on Figma Blue palette
  primary: {
    100: "#ECF4FB", // Lightest blue
    200: "#D9ECFC", // Light blue
    300: "#B4DBFC", // Medium light blue
    400: "#59B3FF", // Medium blue
    500: "#328FEE", // Main primary (500)
    600: "#0866CA", // Dark blue
    700: "#0F4382", // Darker blue
    800: "#18365E", // Darkest blue
  },

  // Secondary Colors - Modern Purple
  secondary: {
    50: "#FAF5FF",
    100: "#F3E8FF",
    200: "#E9D5FF",
    300: "#D8B4FE",
    400: "#C084FC",
    500: "#A855F7", // Main secondary
    600: "#9333EA",
    700: "#7C3AED",
    800: "#6B21A8",
    900: "#581C87",
    950: "#3B0764",
  },

  // Success Colors - Modern Green
  success: {
    50: "#ECFDF5",
    100: "#D1FAE5",
    200: "#A7F3D0",
    300: "#6EE7B7",
    400: "#34D399",
    500: "#10B981", // Main success
    600: "#059669",
    700: "#047857",
    800: "#065F46",
    900: "#064E3B",
    950: "#022C22",
  },

  // Warning Colors - Modern Amber
  warning: {
    50: "#FFFBEB",
    100: "#FEF3C7",
    200: "#FDE68A",
    300: "#FCD34D",
    400: "#FBBF24",
    500: "#F59E0B", // Main warning
    600: "#D97706",
    700: "#B45309",
    800: "#92400E",
    900: "#78350F",
    950: "#451A03",
  },

  // Error Colors - Modern Red
  error: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444", // Main error
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
    950: "#450A0A",
  },

  // Neutral Colors - Based on Figma Gray palette
  neutral: {
    0: "#FFFFFF",
    50: "#FAFAFA", // Extra light gray
    100: "#F1F4F7", // Lightest gray
    200: "#E1E5EA", // Light gray
    300: "#BDC7D1", // Medium light gray
    400: "#A3A3A3", // Medium light gray
    500: "#8C96A2", // Medium gray
    600: "#525252", // Medium dark gray
    700: "#616977", // Dark gray
    800: "#3F4654", // Darker gray
    900: "#191F2A", // Darkest gray
    950: "#0A0A0A", // Extra dark gray
    1000: "#000000", // Black
  },

  // Semantic Colors - Based on Figma design
  background: {
    primary: "#FFFFFF",
    secondary: "#F1F4F7", // From Figma
    tertiary: "#F5F5F5",
  },

  text: {
    primary: "#191F2A", // From Figma
    secondary: "#616977", // From Figma
    tertiary: "#8C96A2", // From Figma
    inverse: "#FFFFFF",
    disabled: "#D4D4D4",
  },

  border: {
    primary: "#E1E5EA", // From Figma
    secondary: "#D4D4D4",
    focus: "#328FEE", // Primary color
    error: "#EF4444",
  },

  // System Colors - Based on Figma System palette
  system: {
    // Green (Success)
    green: "#0DCB56",

    // Red (Error)
    red: "#FA6C6C",

    // Check colors (Status indicators)
    check: {
      blue: "#E6F1FF", // Check 01
      teal: "#D9F1F2", // Check 02
      red: "#FFECEC", // Check 03
      purple: "#E8EEFE", // Check 04
      yellow: "#FFF9EC", // Check 05
      pink: "#F6E8FE", // Check 06
    },
  },

  // Figma-specific colors
  figma: {
    // Status colors from Figma
    master: "#328FEE",
    masterBg: "#D9ECFC",
    masterBorder: "#B4DBFC",

    // Badge colors
    badgeSelected: "#D9ECFC",
    badgeSelectedBorder: "#B4DBFC",
    badgeUnselected: "#FFFFFF",
    badgeUnselectedBorder: "#E1E5EA",

    // Button colors
    buttonPrimary: "#191F2A",
    buttonSecondary: "#616977",

    // Card colors
    cardBackground: "#FFFFFF",
    cardBorder: "#E1E5EA",

    // Thumbnail colors
    thumbnailBg: "#B4DBFC",
  },
};

// Spacing system based on Figma design (4/8/16 system)
export const spacing = {
  // Base spacing units from Figma
  xs: 4, // 4px
  sm: 8, // 8px
  md: 12, // 12px
  lg: 16, // 16px
  xl: 20, // 20px
  "2xl": 24, // 24px
  "3xl": 32, // 32px
  "4xl": 40, // 40px
  "5xl": 48, // 48px
  "6xl": 64, // 64px
  "7xl": 80, // 80px
  "8xl": 96, // 96px

  // Grid system spacing (from Figma)
  grid: {
    xs: 4, // 4px
    sm: 8, // 8px
    md: 12, // 12px
    lg: 16, // 16px
    xl: 20, // 20px
    "2xl": 24, // 24px
  },

  // Component spacing
  component: {
    padding: 16, // Standard component padding
    margin: 16, // Standard component margin
    gap: 8, // Standard gap between elements
  },
};

export const borderRadius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  "2xl": 16,
  "3xl": 24,
  full: 9999,
};

export const typography = {
  fontFamily: {
    sans: "System",
    mono: "Courier New",
  },

  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
    "6xl": 60,
    "7xl": 72,
    "8xl": 96,
    "9xl": 128,
  },

  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },

  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  letterSpacing: {
    tighter: -0.05,
    tight: -0.025,
    normal: 0,
    wide: 0.025,
    wider: 0.05,
    widest: 0.1,
  },
};

export const shadows = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
};

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const zIndex = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

// Grid system based on Figma design
export const grid = {
  // Screen dimensions from Figma
  screen: {
    width: 375, // iPhone X/XS/11 Pro width
    height: 812, // iPhone X/XS/11 Pro height
  },

  // Grid columns (5-column system from Figma)
  columns: 5,
  columnWidth: 59, // 59px per column
  gutter: 12, // 12px gutter between columns

  // Margins and padding
  margin: 16, // 16px left/right margin
  padding: 16, // 16px component padding

  // Breakpoints
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

// Layout system
export const layout = {
  // Container widths
  container: {
    xs: "100%",
    sm: "540px",
    md: "720px",
    lg: "960px",
    xl: "1140px",
  },

  // Component sizes
  component: {
    button: {
      height: 48, // Standard button height
      padding: 16, // Horizontal padding
    },
    input: {
      height: 48, // Standard input height
      padding: 16, // Horizontal padding
    },
    card: {
      padding: 16, // Card padding
      borderRadius: 16, // Card border radius
    },
  },
};
