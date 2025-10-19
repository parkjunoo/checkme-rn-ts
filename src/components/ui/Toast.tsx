import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import { colors, spacing, borderRadius } from "../../theme/tokens";

export interface ToastProps {
  title: string;
  description?: string;
  variant?: "success" | "error" | "warning" | "info";
  onClose?: () => void;
  duration?: number;
  style?: ViewStyle;
}

const getToastStyle = (variant: string): ViewStyle => {
  const baseStyle: ViewStyle = {
    backgroundColor: colors.neutral[0],
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    margin: spacing.sm,
    shadowColor: colors.neutral[400],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    borderLeftWidth: 4,
    minWidth: 300,
    maxWidth: 400,
  };

  const variantStyles: Record<string, ViewStyle> = {
    success: {
      borderLeftColor: colors.success[500],
    },
    error: {
      borderLeftColor: colors.error[500],
    },
    warning: {
      borderLeftColor: colors.warning[500],
    },
    info: {
      borderLeftColor: colors.primary[500],
    },
  };

  return {
    ...baseStyle,
    ...variantStyles[variant],
  };
};

const titleStyle: TextStyle = {
  fontSize: 16,
  fontWeight: "600",
  color: colors.text.primary,
};

const descriptionStyle: TextStyle = {
  fontSize: 14,
  color: colors.text.secondary,
  lineHeight: 20,
  marginTop: spacing.xs,
};

const closeButtonStyle: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
  borderRadius: 4,
  backgroundColor: colors.background.secondary,
};

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  variant = "info",
  onClose,
  style,
}) => {
  const toastStyle = getToastStyle(variant);

  return (
    <View style={[toastStyle, style]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: description ? spacing.xs : 0,
        }}
      >
        <Text style={titleStyle}>{title}</Text>
        {onClose && (
          <TouchableOpacity style={closeButtonStyle} onPress={onClose}>
            <Text style={{ fontSize: 16, color: colors.text.secondary }}>
              ×
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {description && <Text style={descriptionStyle}>{description}</Text>}
    </View>
  );
};

export default Toast;
