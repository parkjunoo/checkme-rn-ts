import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";
import { colors } from "../../theme/tokens";
// import { Ionicons } from "@expo/vector-icons";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondaryA" | "secondaryB" | "text";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  style,
  textStyle,
  fullWidth = false,
}) => {
  const isDisabled = disabled || loading;

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
    const sizeStyles: Record<string, ViewStyle> = {
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
    const variantStyles: Record<string, ViewStyle> = {
      primary: {
        backgroundColor: isDisabled ? colors.blue[200] : colors.primary[500],
        borderWidth: 0,
      },
      secondaryA: {
        backgroundColor: isDisabled ? colors.neutral[300] : colors.neutral[200],
        borderWidth: 0,
      },
      secondaryB: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: isDisabled ? colors.neutral[300] : colors.neutral[200],
      },
      text: {
        backgroundColor: "transparent",
        borderWidth: 0,
      },
    };

    // Full width
    const fullWidthStyles: ViewStyle = fullWidth ? { width: "100%" } : {};

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
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
    const variantTextColors: Record<string, string> = {
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
    const variantIconColors: Record<string, string> = {
      primary: isDisabled ? "#8C96A2" : "#FFFFFF",
      secondaryA: isDisabled ? "#8C96A2" : "#191F2A",
      secondaryB: isDisabled ? "#8C96A2" : "#616977",
      text: isDisabled ? "#8C96A2" : "#616977",
    };

    return variantIconColors[variant];
  };

  const getIconSize = (): number => {
    const sizeIconSizes: Record<string, number> = {
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
      <Text
        style={{
          fontSize: getIconSize(),
          color: getIconColor(),
          marginRight: iconPosition === "left" ? 8 : 0,
          marginLeft: iconPosition === "right" ? 8 : 0,
        }}
      >
        {icon}
      </Text>
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

export default Button;
