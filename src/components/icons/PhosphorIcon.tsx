import React from "react";
import { View, StyleSheet, ViewStyle, Text } from "react-native";

export type PhosphorIconVariant = "outline" | "bold" | "fill";
export type PhosphorIconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface PhosphorIconProps {
  name: PhosphorIconName;
  size?: PhosphorIconSize | number;
  color?: string;
  variant?: PhosphorIconVariant;
  style?: ViewStyle;
}

export type PhosphorIconName =
  | "caret-left"
  | "magnifying-glass"
  | "bell"
  | "check-fat"
  | "check"
  | "star"
  | "heart"
  | "x-circle"
  | "caret-down"
  | "plus-circle"
  | "dots-three-vertical"
  | "share-fat"
  | "plus"
  | "x"
  | "clock"
  | "dots-three-outline"
  | "check-circle"
  | "hourglass"
  | "minus-circle"
  | "crown-simple"
  | "infinity"
  | "pencil-simple-line"
  | "siren"
  | "sign-out"
  | "fire-simple"
  | "arrows-down-up"
  | "funnel"
  | "warning-circle"
  | "image"
  | "circle-notch"
  | "arrow-clockwise"
  | "thumbs-up"
  | "spinner"
  | "cross"
  | "correct"
  | "eraser";

const getSizeValue = (size: PhosphorIconSize | number): number => {
  if (typeof size === "number") return size;

  const sizeMap: Record<PhosphorIconSize, number> = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    "2xl": 48,
  };

  return sizeMap[size];
};

const getIconSymbol = (
  name: PhosphorIconName,
  variant: PhosphorIconVariant
): string => {
  const iconMap: Record<
    PhosphorIconName,
    Record<PhosphorIconVariant, string>
  > = {
    "caret-left": {
      outline: "◀",
      bold: "◀",
      fill: "◀",
    },
    "magnifying-glass": {
      outline: "🔍",
      bold: "🔍",
      fill: "🔍",
    },
    bell: {
      outline: "🔔",
      bold: "🔔",
      fill: "🔔",
    },
    "check-fat": {
      outline: "✓",
      bold: "✓",
      fill: "✓",
    },
    check: {
      outline: "✓",
      bold: "✓",
      fill: "✓",
    },
    star: {
      outline: "★",
      bold: "★",
      fill: "★",
    },
    heart: {
      outline: "♥",
      bold: "♥",
      fill: "♥",
    },
    "x-circle": {
      outline: "✕",
      bold: "✕",
      fill: "✕",
    },
    "caret-down": {
      outline: "▼",
      bold: "▼",
      fill: "▼",
    },
    "plus-circle": {
      outline: "⊕",
      bold: "⊕",
      fill: "⊕",
    },
    "dots-three-vertical": {
      outline: "⋮",
      bold: "⋮",
      fill: "⋮",
    },
    "share-fat": {
      outline: "↗",
      bold: "↗",
      fill: "↗",
    },
    plus: {
      outline: "+",
      bold: "+",
      fill: "+",
    },
    x: {
      outline: "×",
      bold: "×",
      fill: "×",
    },
    clock: {
      outline: "🕐",
      bold: "🕐",
      fill: "🕐",
    },
    "dots-three-outline": {
      outline: "⋯",
      bold: "⋯",
      fill: "⋯",
    },
    "check-circle": {
      outline: "✓",
      bold: "✓",
      fill: "✓",
    },
    hourglass: {
      outline: "⏳",
      bold: "⏳",
      fill: "⏳",
    },
    "minus-circle": {
      outline: "⊖",
      bold: "⊖",
      fill: "⊖",
    },
    "crown-simple": {
      outline: "♔",
      bold: "♔",
      fill: "♔",
    },
    infinity: {
      outline: "∞",
      bold: "∞",
      fill: "∞",
    },
    "pencil-simple-line": {
      outline: "✎",
      bold: "✎",
      fill: "✎",
    },
    siren: {
      outline: "⚠",
      bold: "⚠",
      fill: "⚠",
    },
    "sign-out": {
      outline: "↪",
      bold: "↪",
      fill: "↪",
    },
    "fire-simple": {
      outline: "🔥",
      bold: "🔥",
      fill: "🔥",
    },
    "arrows-down-up": {
      outline: "↕",
      bold: "↕",
      fill: "↕",
    },
    funnel: {
      outline: "🔽",
      bold: "🔽",
      fill: "🔽",
    },
    "warning-circle": {
      outline: "⚠",
      bold: "⚠",
      fill: "⚠",
    },
    image: {
      outline: "🖼",
      bold: "🖼",
      fill: "🖼",
    },
    "circle-notch": {
      outline: "⟳",
      bold: "⟳",
      fill: "⟳",
    },
    "arrow-clockwise": {
      outline: "↻",
      bold: "↻",
      fill: "↻",
    },
    "thumbs-up": {
      outline: "👍",
      bold: "👍",
      fill: "👍",
    },
    spinner: {
      outline: "⟳",
      bold: "⟳",
      fill: "⟳",
    },
    cross: {
      outline: "✗",
      bold: "✗",
      fill: "✗",
    },
    correct: {
      outline: "✓",
      bold: "✓",
      fill: "✓",
    },
    eraser: {
      outline: "🗑",
      bold: "🗑",
      fill: "🗑",
    },
  };

  return iconMap[name][variant];
};

const PhosphorIcon: React.FC<PhosphorIconProps> = ({
  name,
  size = "md",
  color = "#000000",
  variant = "outline",
  style,
}) => {
  const iconSize = getSizeValue(size);
  const iconSymbol = getIconSymbol(name, variant);

  return (
    <View
      style={[styles.container, { width: iconSize, height: iconSize }, style]}
    >
      <Text
        style={{
          fontSize: iconSize,
          color: color,
          textAlign: "center",
          lineHeight: iconSize,
        }}
      >
        {iconSymbol}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PhosphorIcon;
