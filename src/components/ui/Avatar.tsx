import React from "react";
import { View, Image, Text, ViewStyle, TextStyle } from "react-native";
import { colors, typography } from "../../theme/tokens";

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "circle" | "square";
  fallback?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
}

const getAvatarSize = (size: string): number => {
  const sizes: Record<string, number> = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64,
    "2xl": 80,
  };
  return sizes[size] || sizes.md;
};

const getAvatarStyle = (size: string, variant: string): ViewStyle => {
  const avatarSize = getAvatarSize(size);

  return {
    width: avatarSize,
    height: avatarSize,
    borderRadius: variant === "circle" ? avatarSize / 2 : 8,
    backgroundColor: colors.background.secondary,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };
};

const getTextStyle = (size: string): TextStyle => {
  const avatarSize = getAvatarSize(size);
  const fontSize = Math.max(avatarSize * 0.4, 12);

  return {
    fontSize,
    fontWeight: "600",
    color: colors.text.secondary,
  };
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  variant = "circle",
  fallback,
  children,
  style,
}) => {
  const getInitials = (name?: string) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const avatarStyle = getAvatarStyle(size, variant);
  const textStyle = getTextStyle(size);

  return (
    <View style={[avatarStyle, style]}>
      {src ? (
        <Image
          source={{ uri: src }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      ) : (
        <Text style={textStyle}>{fallback || getInitials(alt)}</Text>
      )}
      {children}
    </View>
  );
};

export default Avatar;
