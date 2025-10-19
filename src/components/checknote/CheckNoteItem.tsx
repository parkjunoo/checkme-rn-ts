import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StatusBadge from "./StatusBadge";
import CheckNoteCard from "./CheckNoteCard";
import NextCheckInfo from "./NextCheckInfo";

interface CheckNoteItemProps {
  id: string;
  title: string;
  masterName: string;
  participantCount: number;
  maxParticipants?: number;
  nextCheckDate: string;
  status: "master" | "single" | "multi" | "pending";
  thumbnail?: string;
  isFavorite?: boolean;
  onPress?: () => void;
  onFavoritePress?: () => void;
}

const CheckNoteItem: React.FC<CheckNoteItemProps> = ({
  id,
  title,
  masterName,
  participantCount,
  maxParticipants,
  nextCheckDate,
  status,
  thumbnail,
  isFavorite = false,
  onPress,
  onFavoritePress,
}) => {
  return (
    <View style={styles.container}>
      {/* Header with status badges and favorite button */}
      <View style={styles.header}>
        <View style={styles.statusContainer}>
          {status === "master" && <StatusBadge type="master" />}
          <StatusBadge
            type={status === "master" ? "single" : status}
            isSelected={status !== "pending"}
          />
        </View>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={onFavoritePress}
        >
          <Ionicons
            name={isFavorite ? "star" : "star-outline"}
            size={20}
            color={isFavorite ? "#ffd700" : "#8c96a2"}
          />
        </TouchableOpacity>
      </View>

      {/* Main card content */}
      <CheckNoteCard
        title={title}
        masterName={masterName}
        participantCount={participantCount}
        maxParticipants={maxParticipants}
        thumbnail={thumbnail}
        onPress={onPress}
      />

      {/* Next check info */}
      <NextCheckInfo nextCheckDate={nextCheckDate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  favoriteButton: {
    padding: 8,
    borderRadius: 8,
  },
});

export default CheckNoteItem;
