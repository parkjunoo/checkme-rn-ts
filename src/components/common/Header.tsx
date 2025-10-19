import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PhosphorIcon } from "../icons";

export type HeaderVariant = "default" | "transparent" | "elevated";
export type HeaderSize = "small" | "medium" | "large";

interface HeaderAction {
  icon: string;
  onPress: () => void;
  disabled?: boolean;
  badge?: number;
}

interface HeaderProps {
  title: string;
  leftAction?: HeaderAction;
  rightActions?: HeaderAction[];
  variant?: HeaderVariant;
  size?: HeaderSize;
  showBackButton?: boolean;
  onBackPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
}

const Header: React.FC<HeaderProps> = ({
  title,
  leftAction,
  rightActions = [],
  variant = "default",
  size = "medium",
  showBackButton = false,
  onBackPress,
  backgroundColor,
  textColor,
  style,
  titleStyle,
}) => {
  const getHeaderStyles = (): ViewStyle => {
    const baseStyles: ViewStyle = {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      borderBottomWidth: 0,
    };

    const sizeStyles: Record<HeaderSize, ViewStyle> = {
      small: {
        height: 48,
        paddingVertical: 8,
      },
      medium: {
        height: 56,
        paddingVertical: 12,
      },
      large: {
        height: 64,
        paddingVertical: 16,
      },
    };

    const variantStyles: Record<HeaderVariant, ViewStyle> = {
      default: {
        backgroundColor: backgroundColor || "#FFFFFF",
        borderBottomWidth: 1,
        borderBottomColor: "#E1E5EA",
      },
      transparent: {
        backgroundColor: "transparent",
      },
      elevated: {
        backgroundColor: backgroundColor || "#FFFFFF",
        borderBottomWidth: 1,
        borderBottomColor: "#E1E5EA",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...style,
    };
  };

  const getTitleStyles = (): TextStyle => {
    const baseTextStyles: TextStyle = {
      fontSize: 18,
      fontWeight: "700",
      textAlign: "center",
      flex: 1,
      marginHorizontal: 16,
    };

    const sizeTextStyles: Record<HeaderSize, TextStyle> = {
      small: {
        fontSize: 16,
      },
      medium: {
        fontSize: 18,
      },
      large: {
        fontSize: 20,
      },
    };

    return {
      ...baseTextStyles,
      ...sizeTextStyles[size],
      color: textColor || "#191F2A",
      ...titleStyle,
    };
  };

  const getActionButtonStyles = (): ViewStyle => {
    return {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
    };
  };

  const renderActionButton = (action: HeaderAction, index: number) => {
    const isLeftAction = index === 0 && !showBackButton && !leftAction;

    return (
      <TouchableOpacity
        key={index}
        style={[getActionButtonStyles(), isLeftAction && { marginRight: 8 }]}
        onPress={action.onPress}
        disabled={action.disabled}
        activeOpacity={0.7}
      >
        <Ionicons
          name={action.icon as any}
          size={24}
          color={action.disabled ? "#8C96A2" : textColor || "#191F2A"}
        />
        {action.badge && action.badge > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {action.badge > 99 ? "99+" : action.badge}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderBackButton = () => {
    if (!showBackButton) return null;

    return (
      <TouchableOpacity
        style={getActionButtonStyles()}
        onPress={onBackPress}
        activeOpacity={0.7}
      >
        <Ionicons
          name="chevron-back"
          size={24}
          color={textColor || "#191F2A"}
        />
      </TouchableOpacity>
    );
  };

  const renderLeftSection = () => {
    if (showBackButton) {
      return renderBackButton();
    }

    if (leftAction) {
      return renderActionButton(leftAction, 0);
    }

    return <View style={{ width: 40 }} />;
  };

  const renderRightSection = () => {
    if (rightActions.length === 0) {
      return <View style={{ width: 40 }} />;
    }

    return (
      <View style={styles.rightActions}>
        {rightActions.map((action, index) => renderActionButton(action, index))}
      </View>
    );
  };

  return (
    <View style={getHeaderStyles()}>
      {renderLeftSection()}

      <Text style={getTitleStyles()} numberOfLines={1}>
        {title}
      </Text>

      {renderRightSection()}
    </View>
  );
};

// Specialized Header Components
export const SearchHeader: React.FC<
  Omit<HeaderProps, "rightActions"> & {
    onSearchPress: () => void;
    onNotificationPress: () => void;
    notificationCount?: number;
  }
> = ({
  onSearchPress,
  onNotificationPress,
  notificationCount = 0,
  ...props
}) => {
  const rightActions: HeaderAction[] = [
    {
      icon: "search",
      onPress: onSearchPress,
    },
    {
      icon: "notifications",
      onPress: onNotificationPress,
      badge: notificationCount,
    },
  ];

  return <Header {...props} rightActions={rightActions} />;
};

export const BackHeader: React.FC<
  Omit<HeaderProps, "showBackButton" | "onBackPress"> & {
    onBackPress: () => void;
  }
> = ({ onBackPress, ...props }) => {
  return <Header {...props} showBackButton={true} onBackPress={onBackPress} />;
};

export const SimpleHeader: React.FC<
  Omit<HeaderProps, "leftAction" | "rightActions">
> = (props) => {
  return <Header {...props} rightActions={[]} />;
};

const styles = StyleSheet.create({
  rightActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  badge: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "#EF4444",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default Header;
