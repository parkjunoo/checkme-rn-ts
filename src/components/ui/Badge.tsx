import React from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import { colors, spacing, borderRadius, typography } from "../../theme/tokens";

export interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "default"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "outline";
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const getBadgeStyle = (
  variant: string,
  size: string,
  rounded: boolean
): ViewStyle => {
  const baseStyle: ViewStyle = {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: rounded ? borderRadius.full : borderRadius.md,
  };

  const sizeStyles: Record<string, ViewStyle> = {
    sm: {
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.xs,
      minHeight: 20,
    },
    md: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      minHeight: 24,
    },
    lg: {
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.sm,
      minHeight: 32,
    },
  };

  const variantStyles: Record<string, ViewStyle> = {
    default: {
      backgroundColor: colors.primary[500],
    },
    secondary: {
      backgroundColor: colors.secondary[500],
    },
    success: {
      backgroundColor: colors.success[500],
    },
    warning: {
      backgroundColor: colors.warning[500],
    },
    error: {
      backgroundColor: colors.error[500],
    },
    outline: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: colors.primary[500],
    },
  };

  return {
    ...baseStyle,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };
};

const getTextStyle = (variant: string, size: string): TextStyle => {
  const sizeStyles: Record<string, TextStyle> = {
    sm: { fontSize: typography.fontSize.xs },
    md: { fontSize: typography.fontSize.sm },
    lg: { fontSize: typography.fontSize.base },
  };

  const variantStyles: Record<string, TextStyle> = {
    default: { color: colors.neutral[0] },
    secondary: { color: colors.neutral[0] },
    success: { color: colors.neutral[0] },
    warning: { color: colors.neutral[0] },
    error: { color: colors.neutral[0] },
    outline: { color: colors.primary[500] },
  };

  return {
    fontWeight: "500",
    textAlign: "center",
    ...sizeStyles[size],
    ...variantStyles[variant],
  };
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  rounded = true,
  style,
  textStyle,
}) => {
  const badgeStyle = getBadgeStyle(variant, size, rounded);
  const textStyleResult = getTextStyle(variant, size);

  return (
    <View style={[badgeStyle, style]}>
      <Text style={[textStyleResult, textStyle]}>{children}</Text>
    </View>
  );
};

export default Badge;
