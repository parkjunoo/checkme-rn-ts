import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDesignSystem } from "../../hooks/useDesignSystem";

interface NextCheckInfoProps {
  nextCheckDate: string;
}

const NextCheckInfo: React.FC<NextCheckInfoProps> = ({ nextCheckDate }) => {
  const { colors } = useDesignSystem();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.background.secondary },
      ]}
    >
      <Text style={[styles.label, { color: colors.text.primary }]}>
        내 다음 체크 :
      </Text>
      <Text style={[styles.date, { color: colors.text.primary }]}>
        {nextCheckDate}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f4f7",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: "800",
    color: "#191f2a",
    letterSpacing: -0.24,
    lineHeight: 18,
  },
  date: {
    fontSize: 12,
    fontWeight: "500",
    color: "#191f2a",
    letterSpacing: -0.24,
    lineHeight: 18,
  },
});

export default NextCheckInfo;
