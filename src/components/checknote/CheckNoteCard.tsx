import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDesignSystem } from "../../hooks/useDesignSystem";

interface CheckNoteCardProps {
  title: string;
  masterName: string;
  participantCount: number;
  maxParticipants?: number;
  thumbnail?: string;
  onPress?: () => void;
}

const CheckNoteCard: React.FC<CheckNoteCardProps> = ({
  title,
  masterName,
  participantCount,
  maxParticipants,
  thumbnail,
  onPress,
}) => {
  const { colors, spacing, utils } = useDesignSystem();
  const cardStyles = utils.getCardStyles();
  const getParticipantText = () => {
    if (maxParticipants) {
      return `${participantCount}명 참여 중(최대 ${maxParticipants}명)`;
    }
    return `${participantCount}명 참여 중(제한 없음)`;
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: colors.figma.cardBackground,
          borderColor: colors.figma.cardBorder,
          ...cardStyles,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.content}>
        <View style={styles.textContent}>
          <Text style={[styles.title, { color: colors.text.primary }]}>
            {title}
          </Text>
          <View style={styles.profileRow}>
            <Text
              style={[styles.masterLabel, { color: colors.text.secondary }]}
            >
              마스터
            </Text>
            <Text style={[styles.masterName, { color: colors.text.secondary }]}>
              {masterName}
            </Text>
            <View
              style={[styles.dot, { backgroundColor: colors.text.tertiary }]}
            />
            <Text
              style={[styles.participantText, { color: colors.text.secondary }]}
            >
              {getParticipantText()}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.thumbnail,
            { backgroundColor: colors.figma.thumbnailBg },
          ]}
        >
          {thumbnail ? (
            <Image source={{ uri: thumbnail }} style={styles.thumbnailImage} />
          ) : (
            <View
              style={[
                styles.thumbnailPlaceholder,
                { backgroundColor: colors.figma.thumbnailBg },
              ]}
            >
              <Ionicons name="document-text" size={24} color="#ffffff" />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e1e5ea",
    padding: 16,
    marginBottom: 16,
  },
  content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  textContent: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: "#191f2a",
    letterSpacing: -0.32,
    lineHeight: 24,
    marginBottom: 8,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  masterLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#616977",
    letterSpacing: -0.28,
    lineHeight: 21,
  },
  masterName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#616977",
    letterSpacing: -0.28,
    lineHeight: 21,
    marginLeft: 4,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: "#8c96a2",
    marginHorizontal: 8,
  },
  participantText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#616977",
    letterSpacing: -0.28,
    lineHeight: 21,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#b4dbfc",
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnailImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  thumbnailPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#b4dbfc",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CheckNoteCard;
