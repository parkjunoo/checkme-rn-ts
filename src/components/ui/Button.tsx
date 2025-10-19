import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type ButtonVariant = "primary" | "secondaryA" | "secondaryB" | "text";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonState = "default" | "pressed" | "disabled";

export interface ButtonProps {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  icon?: keyof typeof Ionicons.glyphMap;
  iconPosition?: "left" | "right";
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  state = "default",
  icon,
  iconPosition = "left",
  loading = false,
  disabled = false,
  style,
  textStyle,
  fullWidth = false,
}) => {
  const isDisabled = disabled || state === "disabled" || loading;

  const getButtonStyles = (): ViewStyle => {
    const baseStyles: ViewStyle = {
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 56,
      minHeight: 40,
    };

    // Size styles
    const sizeStyles: Record<ButtonSize, ViewStyle> = {
      small: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        minHeight: 32,
      },
      medium: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        minHeight: 40,
      },
      large: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        minHeight: 48,
      },
    };

    // Variant styles
    const variantStyles: Record<ButtonVariant, ViewStyle> = {
      primary: {
        backgroundColor: isDisabled ? "#BDC7D1" : "#191F2A",
        borderWidth: 0,
      },
      secondaryA: {
        backgroundColor: isDisabled ? "#BDC7D1" : "#E1E5EA",
        borderWidth: 0,
      },
      secondaryB: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: isDisabled ? "#BDC7D1" : "#E1E5EA",
      },
      text: {
        backgroundColor: "transparent",
        borderWidth: 0,
      },
    };

    // State styles
    const stateStyles: Record<ButtonState, ViewStyle> = {
      default: {},
      pressed: {
        opacity: 0.8,
      },
      disabled: {
        opacity: 0.6,
      },
    };

    // Full width
    const fullWidthStyles: ViewStyle = fullWidth ? { width: "100%" } : {};

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...stateStyles[state],
      ...fullWidthStyles,
      ...style,
    };
  };

  const getTextStyles = (): TextStyle => {
    const baseTextStyles: TextStyle = {
      fontSize: 14,
      fontWeight: "700",
      letterSpacing: -0.28,
      lineHeight: 21,
    };

    // Variant text colors
    const variantTextColors: Record<ButtonVariant, string> = {
      primary: isDisabled ? "#8C96A2" : "#FFFFFF",
      secondaryA: isDisabled ? "#8C96A2" : "#191F2A",
      secondaryB: isDisabled ? "#8C96A2" : "#616977",
      text: isDisabled ? "#8C96A2" : "#616977",
    };

    return {
      ...baseTextStyles,
      color: variantTextColors[variant],
      ...textStyle,
    };
  };

  const getIconColor = (): string => {
    const variantIconColors: Record<ButtonVariant, string> = {
      primary: isDisabled ? "#8C96A2" : "#FFFFFF",
      secondaryA: isDisabled ? "#8C96A2" : "#191F2A",
      secondaryB: isDisabled ? "#8C96A2" : "#616977",
      text: isDisabled ? "#8C96A2" : "#616977",
    };

    return variantIconColors[variant];
  };

  const getIconSize = (): number => {
    const sizeIconSizes: Record<ButtonSize, number> = {
      small: 14,
      medium: 16,
      large: 18,
    };

    return sizeIconSizes[size];
  };

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <ActivityIndicator
            size="small"
            color={getIconColor()}
            style={{ marginRight: 8 }}
          />
          <Text style={getTextStyles()}>로딩 중...</Text>
        </>
      );
    }

    const iconElement = icon && (
      <Ionicons
        name={icon}
        size={getIconSize()}
        color={getIconColor()}
        style={{
          marginRight: iconPosition === "left" ? 8 : 0,
          marginLeft: iconPosition === "right" ? 8 : 0,
        }}
      />
    );

    return (
      <>
        {iconPosition === "left" && iconElement}
        <Text style={getTextStyles()}>{title}</Text>
        {iconPosition === "right" && iconElement}
      </>
    );
  };

  return (
    <TouchableOpacity
      style={getButtonStyles()}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

// Icon Button Component
export interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: ViewStyle;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  size = "medium",
  variant = "primary",
  disabled = false,
  style,
}) => {
  const getIconButtonStyles = (): ViewStyle => {
    const baseStyles: ViewStyle = {
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      minWidth: 40,
      minHeight: 40,
    };

    const sizeStyles: Record<ButtonSize, ViewStyle> = {
      small: { width: 32, height: 32 },
      medium: { width: 40, height: 40 },
      large: { width: 48, height: 48 },
    };

    const variantStyles: Record<ButtonVariant, ViewStyle> = {
      primary: {
        backgroundColor: disabled ? "#BDC7D1" : "#191F2A",
      },
      secondaryA: {
        backgroundColor: disabled ? "#BDC7D1" : "#E1E5EA",
      },
      secondaryB: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: disabled ? "#BDC7D1" : "#E1E5EA",
      },
      text: {
        backgroundColor: "transparent",
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...style,
    };
  };

  const getIconColor = (): string => {
    const variantIconColors: Record<ButtonVariant, string> = {
      primary: disabled ? "#8C96A2" : "#FFFFFF",
      secondaryA: disabled ? "#8C96A2" : "#191F2A",
      secondaryB: disabled ? "#8C96A2" : "#616977",
      text: disabled ? "#8C96A2" : "#616977",
    };

    return variantIconColors[variant];
  };

  const getIconSize = (): number => {
    const sizeIconSizes: Record<ButtonSize, number> = {
      small: 16,
      medium: 20,
      large: 24,
    };

    return sizeIconSizes[size];
  };

  return (
    <TouchableOpacity
      style={getIconButtonStyles()}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Ionicons name={icon} size={getIconSize()} color={getIconColor()} />
    </TouchableOpacity>
  );
};

// Button Group Component
export interface ButtonGroupProps {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  spacing?: number;
  style?: ViewStyle;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  direction = "horizontal",
  spacing = 8,
  style,
}) => {
  const groupStyles: ViewStyle = {
    flexDirection: direction === "horizontal" ? "row" : "column",
    gap: spacing,
    ...style,
  };

  return <>{children}</>;
};

export default Button;
