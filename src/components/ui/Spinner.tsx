import React from "react";
import {
  View,
  ActivityIndicator,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";
import { colors, spacing } from "../../theme/tokens";

export interface SpinnerProps {
  size?: "small" | "large";
  color?: string;
  overlay?: boolean;
  message?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const getContainerStyle = (overlay: boolean): ViewStyle => {
  const baseStyle: ViewStyle = {
    alignItems: "center",
    justifyContent: "center",
  };

  const overlayStyle: ViewStyle = overlay
    ? {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        zIndex: 1000,
      }
    : {};

  return {
    ...baseStyle,
    ...overlayStyle,
  };
};

const messageStyle: TextStyle = {
  fontSize: 14,
  color: colors.text.secondary,
  textAlign: "center",
  marginTop: spacing.md,
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = "large",
  color = colors.primary[500],
  overlay = false,
  message,
  style,
  textStyle,
}) => {
  const containerStyle = getContainerStyle(overlay);

  return (
    <View style={[containerStyle, style]}>
      <ActivityIndicator size={size} color={color} />
      {message && <Text style={[messageStyle, textStyle]}>{message}</Text>}
    </View>
  );
};

export default Spinner;
