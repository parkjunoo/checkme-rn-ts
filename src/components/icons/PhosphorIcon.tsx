import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import {
  CaretLeft,
  MagnifyingGlass,
  Bell,
  DotsThreeVertical,
} from "../../assets/icons";

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
  | "dots-three-vertical";

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

const getIconComponent = (name: PhosphorIconName) => {
  const iconMap: Record<PhosphorIconName, React.ComponentType<any>> = {
    "caret-left": CaretLeft,
    "magnifying-glass": MagnifyingGlass,
    bell: Bell,
    "dots-three-vertical": DotsThreeVertical,
  };

  return iconMap[name];
};

const PhosphorIcon: React.FC<PhosphorIconProps> = ({
  name,
  size = "md",
  color = "#000000",
  variant = "outline",
  style,
}) => {
  const iconSize = getSizeValue(size);
  const IconComponent = getIconComponent(name);

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <View
      style={[styles.container, { width: iconSize, height: iconSize }, style]}
    >
      <IconComponent width={iconSize} height={iconSize} color={color} />
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
