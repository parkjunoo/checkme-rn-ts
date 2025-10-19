import { createTamagui } from "@tamagui/core";
import { createInterFont } from "@tamagui/font-inter";
import { createMedia } from "@tamagui/react-native-media-driver";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";
import { createAnimations } from "@tamagui/animations-react-native";

import { config } from "./src/theme/config";

const interFont = createInterFont();

const animations = createAnimations({
  bouncy: {
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    damping: 20,
    stiffness: 60,
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});

const media = createMedia({
  xs: { maxWidth: 660 },
  sm: { maxWidth: 800 },
  md: { maxWidth: 1020 },
  lg: { maxWidth: 1280 },
  xl: { maxWidth: 1420 },
  xxl: { maxWidth: 1600 },
  gtXs: { minWidth: 660 + 1 },
  gtSm: { minWidth: 800 + 1 },
  gtMd: { minWidth: 1020 + 1 },
  gtLg: { minWidth: 1280 + 1 },
  short: { maxHeight: 820 },
  tall: { minHeight: 820 },
  hoverNone: { hover: "none" },
  pointerCoarse: { pointer: "coarse" },
});

const tamaguiConfig = createTamagui({
  animations,
  defaultTheme: "light",
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    heading: interFont,
    body: interFont,
  },
  tokens,
  themes: {
    ...themes,
    ...config.themes,
  },
  media,
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}
