import React from "react";

import { View, ViewStyle } from "react-native";
import { colors, spacing, borderRadius } from "../../theme/tokens";

export interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  style?: ViewStyle;
  onPress?: () => void;
}

const getCardStyle = (
  variant: string,
  size: string,
  interactive: boolean
): ViewStyle => {
  const baseStyle: ViewStyle = {
    borderRadius: borderRadius.lg,
    backgroundColor: colors.neutral[0],
    borderWidth: 1,
    borderColor: colors.border.primary,
    overflow: "hidden",
  };

  const sizeStyles: Record<string, ViewStyle> = {
    sm: { padding: spacing.md },
    md: { padding: spacing.lg },
    lg: { padding: spacing["2xl"] },
  };

  const variantStyles: Record<string, ViewStyle> = {
    default: {
      shadowColor: colors.neutral[400],
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    elevated: {
      shadowColor: colors.neutral[400],
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 8,
      borderColor: "transparent",
    },
    outlined: {
      borderWidth: 1,
      borderColor: colors.border.primary,
      shadowOpacity: 0,
      elevation: 0,
    },
    filled: {
      backgroundColor: colors.background.secondary,
      borderColor: "transparent",
      shadowOpacity: 0,
      elevation: 0,
    },
  };

  const interactiveStyle: ViewStyle = interactive
    ? {
        shadowColor: colors.neutral[400],
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 12,
      }
    : {};

  return {
    ...baseStyle,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...interactiveStyle,
  };
};

export const Card: React.FC<CardProps> = ({
  variant = "default",
  size = "md",
  interactive = false,
  children,
  style,
  onPress,
}) => {
  const cardStyle = getCardStyle(variant, size, interactive);

  return (
    <View style={[cardStyle, style]} onTouchEnd={onPress}>
      {children}
    </View>
  );
};

export default Card;
