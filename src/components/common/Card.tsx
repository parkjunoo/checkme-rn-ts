import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { COLORS, SIZES } from "../../constants";

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  margin?: number;
  shadow?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = SIZES.md,
  margin = 0,
  shadow = true,
}) => {
  return (
    <View
      style={[
        styles.card,
        {
          padding,
          margin,
        },
        shadow && styles.shadow,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.sm,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Card;
