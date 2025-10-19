import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal as RNModal,
  ViewStyle,
  TextStyle,
} from "react-native";
import { colors, spacing, borderRadius } from "../../theme/tokens";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  variant?: "default" | "fullscreen" | "centered";
  size?: "sm" | "md" | "lg" | "xl";
  showCloseButton?: boolean;
  showFooter?: boolean;
  footerActions?: React.ReactNode;
  style?: ViewStyle;
}

const overlayStyle: ViewStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const getModalStyle = (variant: string, size: string): ViewStyle => {
  const baseStyle: ViewStyle = {
    backgroundColor: colors.neutral[0],
    borderRadius: borderRadius.lg,
    shadowColor: colors.neutral[400],
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 16,
    overflow: "hidden",
  };

  const variantStyles: Record<string, ViewStyle> = {
    default: {
      maxWidth: "90%",
      maxHeight: "90%",
    },
    fullscreen: {
      width: "100%",
      height: "100%",
      borderRadius: 0,
    },
    centered: {
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "90%",
      maxHeight: "90%",
    },
  };

  const sizeStyles: Record<string, ViewStyle> = {
    sm: { width: 400 },
    md: { width: 500 },
    lg: { width: 600 },
    xl: { width: 800 },
  };

  return {
    ...baseStyle,
    ...variantStyles[variant],
    ...sizeStyles[size],
  };
};

const headerStyle: ViewStyle = {
  padding: spacing.lg,
  borderBottomWidth: 1,
  borderBottomColor: colors.border.primary,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

const titleStyle: TextStyle = {
  fontSize: 18,
  fontWeight: "600",
  color: colors.text.primary,
  flex: 1,
};

const bodyStyle: ViewStyle = {
  padding: spacing.lg,
  flex: 1,
};

const footerStyle: ViewStyle = {
  padding: spacing.lg,
  borderTopWidth: 1,
  borderTopColor: colors.border.primary,
  flexDirection: "row",
  gap: spacing.md,
  justifyContent: "flex-end",
};

const closeButtonStyle: ViewStyle = {
  width: 32,
  height: 32,
  borderRadius: 4,
  backgroundColor: "transparent",
  alignItems: "center",
  justifyContent: "center",
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  variant = "default",
  size = "md",
  showCloseButton = true,
  showFooter = false,
  footerActions,
  style,
}) => {
  if (!isOpen) return null;

  const modalStyle = getModalStyle(variant, size);

  return (
    <RNModal
      visible={isOpen}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={overlayStyle}>
        <View style={[modalStyle, style]}>
          <View style={headerStyle}>
            <Text style={titleStyle}>{title}</Text>
            {showCloseButton && (
              <TouchableOpacity style={closeButtonStyle} onPress={onClose}>
                <Text style={{ fontSize: 20, color: colors.text.secondary }}>
                  ×
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={bodyStyle}>{children}</View>

          {showFooter && (
            <View style={footerStyle}>
              {footerActions || (
                <>
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: spacing.lg,
                      paddingVertical: spacing.sm,
                      borderRadius: borderRadius.md,
                      borderWidth: 1,
                      borderColor: colors.primary[500],
                    }}
                    onPress={onClose}
                  >
                    <Text style={{ color: colors.primary[500] }}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: spacing.lg,
                      paddingVertical: spacing.sm,
                      borderRadius: borderRadius.md,
                      backgroundColor: colors.primary[500],
                    }}
                    onPress={onClose}
                  >
                    <Text style={{ color: colors.neutral[0] }}>Confirm</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          )}
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
