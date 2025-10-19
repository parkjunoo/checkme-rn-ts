import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDesignSystem } from "../../hooks/useDesignSystem";

interface StatusBadgeProps {
  type: "master" | "single" | "multi" | "pending";
  isSelected?: boolean;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  type,
  isSelected = false,
}) => {
  const { colors } = useDesignSystem();

  const getBadgeConfig = () => {
    switch (type) {
      case "master":
        return {
          backgroundColor: colors.figma.masterBg,
          borderColor: colors.figma.masterBorder,
          textColor: colors.figma.master,
          icon: "star" as const,
          label: "마스터",
        };
      case "single":
        return {
          backgroundColor: isSelected
            ? colors.figma.badgeSelected
            : colors.figma.badgeUnselected,
          borderColor: isSelected
            ? colors.figma.badgeSelectedBorder
            : colors.figma.badgeUnselectedBorder,
          textColor: isSelected ? colors.figma.master : colors.text.tertiary,
          icon: "checkmark" as const,
          label: "싱글",
        };
      case "multi":
        return {
          backgroundColor: isSelected
            ? colors.figma.badgeSelected
            : colors.figma.badgeUnselected,
          borderColor: isSelected
            ? colors.figma.badgeSelectedBorder
            : colors.figma.badgeUnselectedBorder,
          textColor: isSelected ? colors.figma.master : colors.text.tertiary,
          icon: "checkmark" as const,
          label: "멀티",
        };
      case "pending":
        return {
          backgroundColor: colors.background.secondary,
          borderColor: colors.border.primary,
          textColor: colors.text.secondary,
          icon: "time" as const,
          label: "승인 중",
        };
      default:
        return {
          backgroundColor: colors.figma.badgeUnselected,
          borderColor: colors.figma.badgeUnselectedBorder,
          textColor: colors.text.tertiary,
          icon: "checkmark" as const,
          label: "싱글",
        };
    }
  };

  const config = getBadgeConfig();

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: config.backgroundColor,
          borderColor: config.borderColor,
        },
      ]}
    >
      <Ionicons name={config.icon} size={16} color={config.textColor} />
      <Text style={[styles.badgeText, { color: config.textColor }]}>
        {config.label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    gap: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: -0.24,
  },
});

export default StatusBadge;
