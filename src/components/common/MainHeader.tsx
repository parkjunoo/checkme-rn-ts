import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { PhosphorIcon } from "../icons";

interface HeaderAction {
  icon: string;
  onPress: () => void;
  disabled?: boolean;
}

interface HeaderProps {
  title: string;
  leftAction?: HeaderAction;
  rightActions?: HeaderAction[];
  onBackPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  // 공통 함수들
  onSearchPress?: () => void;
  onNotificationPress?: () => void;
  onMenuPress?: () => void;
  showSearch?: boolean;
  showNotification?: boolean;
  showMenu?: boolean;
}

export default function Header({
  title,
  leftAction,
  rightActions = [],
  onBackPress,
  backgroundColor = "#FFFFFF",
  textColor = "#191F2A",
  style,
  titleStyle,
  // 공통 함수들
  onSearchPress,
  onNotificationPress,
  onMenuPress,
  showSearch = false,
  showNotification = false,
  showMenu = false,
}: HeaderProps) {
  const renderActionButton = (action: HeaderAction, index: number) => (
    <TouchableOpacity
      key={index}
      style={styles.actionButton}
      onPress={action.onPress}
      disabled={action.disabled}
      activeOpacity={0.7}
    >
      <PhosphorIcon
        name={action.icon as any}
        size={24}
        color={action.disabled ? "#8C96A2" : textColor}
      />
    </TouchableOpacity>
  );

  const renderLeftSection = () => {
    if (onBackPress) {
      return (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={onBackPress}
          activeOpacity={0.7}
        >
          <PhosphorIcon name="caret-left" size={24} color={textColor} />
        </TouchableOpacity>
      );
    }

    if (leftAction) {
      return renderActionButton(leftAction, 0);
    }

    return <View style={styles.actionButton} />;
  };

  const renderRightSection = () => {
    // 공통 액션들과 커스텀 액션들을 합침
    const allActions: HeaderAction[] = [];

    // 공통 액션들 추가
    if (showSearch && onSearchPress) {
      allActions.push({
        icon: "magnifying-glass",
        onPress: onSearchPress,
      });
    }

    if (showNotification && onNotificationPress) {
      allActions.push({
        icon: "bell",
        onPress: onNotificationPress,
      });
    }

    if (showMenu && onMenuPress) {
      allActions.push({
        icon: "dots-three-vertical",
        onPress: onMenuPress,
      });
    }

    // 커스텀 액션들 추가
    allActions.push(...rightActions);

    if (allActions.length === 0) {
      return <View style={styles.actionButton} />;
    }

    return (
      <View style={styles.rightActions}>
        {allActions.map((action, index) => renderActionButton(action, index))}
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      {renderLeftSection()}

      <Text
        style={[styles.title, { color: textColor }, titleStyle]}
        numberOfLines={1}
      >
        {title}
      </Text>

      {renderRightSection()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 44, // Figma 디자인: 44px 높이
    paddingHorizontal: 16, // Figma 디자인: 좌우 16px 패딩
  },
  title: {
    fontSize: 20, // Figma 디자인: 20px
    fontWeight: "800", // Figma 디자인: ExtraBold (800)
    flex: 1,
    marginHorizontal: 16, // Figma 디자인: 좌우 16px 마진
    letterSpacing: -0.4, // Figma 디자인: -0.4 letter spacing
    lineHeight: 28, // Figma 디자인: 28px line height
    textAlign: "left",
  },
  actionButton: {
    width: 40, // Figma 디자인: 40x40px 터치 영역
    height: 40,
    borderRadius: 8, // Figma 디자인: 8px border radius
    alignItems: "center",
    justifyContent: "center",
  },
  rightActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4, // Figma 디자인: 버튼 간 4px 간격
  },
});
