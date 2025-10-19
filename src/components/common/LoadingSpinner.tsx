import React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

interface LoadingSpinnerProps {
  size?: "small" | "large";
  color?: string;
  text?: string;
  overlay?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "large",
  color = COLORS.primary,
  text,
  overlay = false,
}) => {
  const containerStyle = overlay
    ? [styles.overlay, styles.centered]
    : styles.centered;

  return (
    <View style={containerStyle}>
      <ActivityIndicator size={size} color={color} />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  text: {
    marginTop: SIZES.sm,
    fontSize: 16,
    color: COLORS.text,
  },
});

export default LoadingSpinner;
