import React from "react";
import { TextInput, View, Text, ViewStyle, TextStyle } from "react-native";
import { colors, spacing, borderRadius, typography } from "../../theme/tokens";

export interface InputProps {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "filled" | "outlined";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  [key: string]: any; // For TextInput props
}

const getInputStyle = (
  variant: string,
  size: string,
  fullWidth: boolean,
  error: boolean
): ViewStyle => {
  const baseStyle: ViewStyle = {
    borderRadius: borderRadius.md,
    borderWidth: 1,
    paddingHorizontal: spacing.lg,
    fontSize: typography.fontSize.base,
    color: colors.text.primary,
    backgroundColor: colors.neutral[0],
  };

  const sizeStyles: Record<string, ViewStyle> = {
    sm: {
      paddingVertical: spacing.sm,
      minHeight: 36,
      fontSize: typography.fontSize.sm,
    },
    md: {
      paddingVertical: spacing.md,
      minHeight: 44,
      fontSize: typography.fontSize.base,
    },
    lg: {
      paddingVertical: spacing.lg,
      minHeight: 52,
      fontSize: typography.fontSize.lg,
    },
  };

  const variantStyles: Record<string, ViewStyle> = {
    default: {
      borderColor: colors.border.primary,
    },
    filled: {
      backgroundColor: colors.background.secondary,
      borderColor: "transparent",
    },
    outlined: {
      borderWidth: 2,
      borderColor: colors.border.primary,
    },
  };

  return {
    ...baseStyle,
    ...sizeStyles[size],
    ...variantStyles[variant],
    width: fullWidth ? "100%" : undefined,
    borderColor: error
      ? colors.border.error
      : variantStyles[variant].borderColor,
  };
};

const getLabelStyle = (): TextStyle => ({
  fontSize: typography.fontSize.sm,
  fontWeight: "500",
  color: colors.text.primary,
  marginBottom: spacing.sm,
});

const getHelperTextStyle = (error: boolean): TextStyle => ({
  fontSize: typography.fontSize.xs,
  marginTop: spacing.xs,
  color: error ? colors.error[500] : colors.text.secondary,
});

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  variant = "default",
  size = "md",
  fullWidth = true,
  style,
  textStyle,
  ...props
}) => {
  const inputStyle = getInputStyle(variant, size, fullWidth, !!error);
  const labelStyle = getLabelStyle();
  const helperTextStyle = getHelperTextStyle(!!error);

  return (
    <View style={{ width: fullWidth ? "100%" : undefined }}>
      {label && <Text style={labelStyle}>{label}</Text>}
      <TextInput
        style={[inputStyle, textStyle]}
        placeholderTextColor={colors.text.tertiary}
        {...props}
      />
      {(error || helperText) && (
        <Text style={helperTextStyle}>{error || helperText}</Text>
      )}
    </View>
  );
};

export default Input;
