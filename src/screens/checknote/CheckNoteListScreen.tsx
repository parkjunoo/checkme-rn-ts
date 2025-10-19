import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CheckNoteItem } from "../../components";
import { SearchHeader } from "../../components/common/Header";
import { useDesignSystem } from "../../hooks/useDesignSystem";

interface FilterChipProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
  icon?: string;
}

const FilterChip: React.FC<FilterChipProps> = ({
  label,
  isSelected,
  onPress,
  icon,
}) => (
  <TouchableOpacity
    style={[
      styles.chip,
      isSelected ? styles.chipSelected : styles.chipUnselected,
    ]}
    onPress={onPress}
  >
    {icon && (
      <Ionicons
        name={icon as any}
        size={16}
        color={isSelected ? "#328fee" : "#8c96a2"}
        style={styles.chipIcon}
      />
    )}
    <Text
      style={[
        styles.chipText,
        isSelected ? styles.chipTextSelected : styles.chipTextUnselected,
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

// Sample data based on the Figma design
const sampleCheckNotes = [
  {
    id: "1",
    title: "만보는 부담되니 하루 5천보 걷기!",
    masterName: "심혜나",
    participantCount: 3,
    maxParticipants: 4,
    nextCheckDate: "2025. 12. 1.",
    status: "master" as const,
    isFavorite: true,
  },
  {
    id: "2",
    title: "진심 매일 같이 건강하게",
    masterName: "수민",
    participantCount: 17,
    nextCheckDate: "2025. 12. 2. 15:00",
    status: "multi" as const,
    isFavorite: false,
  },
  {
    id: "3",
    title: "이자성 PT 헬스.",
    masterName: "심혜나",
    participantCount: 17,
    nextCheckDate: "2025. 12. 2. 15:00",
    status: "multi" as const,
    isFavorite: false,
  },
  {
    id: "4",
    title: "우지윤 수학의 정석 숙제 검사방",
    masterName: "우지윤",
    participantCount: 25,
    maxParticipants: 100,
    nextCheckDate: "2025. 12. 2. 15:00",
    status: "multi" as const,
    isFavorite: false,
  },
  {
    id: "5",
    title: "3반 죽음의 다이어트",
    masterName: "브라이언",
    participantCount: 4,
    maxParticipants: 4,
    nextCheckDate: "2025. 12. 5. 20:00",
    status: "master" as const,
    isFavorite: false,
  },
  {
    id: "6",
    title: "매일매일 영어 공부 인증",
    masterName: "브라이언",
    participantCount: 6,
    maxParticipants: 10,
    nextCheckDate: "2025. 12. 2. 15:00",
    status: "pending" as const,
    isFavorite: false,
  },
];

const CheckNoteListScreen: React.FC = () => {
  const { colors, spacing } = useDesignSystem();
  const [selectedFilter, setSelectedFilter] = useState<"single" | "multi">(
    "single"
  );
  const [showPendingOnly, setShowPendingOnly] = useState(false);

  const handleCreateCheckNote = () => {
    // TODO: Navigate to create check note screen
    console.log("Create check note");
  };

  const handleParticipateCheckNote = () => {
    // TODO: Navigate to participate check note screen
    console.log("Participate in check note");
  };

  const handleCheckNotePress = (id: string) => {
    // TODO: Navigate to check note detail
    console.log("Check note pressed:", id);
  };

  const handleFavoritePress = (id: string) => {
    // TODO: Toggle favorite status
    console.log("Favorite toggled:", id);
  };

  // Filter check notes based on selected filter and pending status
  const filteredCheckNotes = sampleCheckNotes.filter((note) => {
    if (showPendingOnly && note.status !== "pending") return false;
    if (
      selectedFilter === "single" &&
      note.status !== "single" &&
      note.status !== "master"
    )
      return false;
    if (selectedFilter === "multi" && note.status !== "multi") return false;
    return true;
  });

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background.primary }]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background.primary}
      />

      {/* Navigation Bar */}
      <SearchHeader
        title="내 체크 노트"
        onSearchPress={() => console.log("Search pressed")}
        onNotificationPress={() => console.log("Notification pressed")}
        notificationCount={3}
        backgroundColor={colors.background.primary}
        textColor={colors.text.primary}
      />

      {/* Filter Section */}
      <View
        style={[
          styles.filterSection,
          { backgroundColor: colors.background.secondary },
        ]}
      >
        <View style={styles.filterRow}>
          <View style={styles.filterGroup}>
            <FilterChip
              label="싱글"
              isSelected={selectedFilter === "single"}
              onPress={() => setSelectedFilter("single")}
              icon="checkmark"
            />
            <FilterChip
              label="멀티"
              isSelected={selectedFilter === "multi"}
              onPress={() => setSelectedFilter("multi")}
              icon="checkmark"
            />
          </View>
          <TouchableOpacity style={styles.sortButton}>
            <Ionicons name="swap-vertical" size={16} color="#616977" />
            <Text style={styles.sortText}>최신순</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxRow}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setShowPendingOnly(!showPendingOnly)}
          >
            {showPendingOnly && (
              <Ionicons name="checkmark" size={16} color="#191f2a" />
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>승인 중인 체크 노트만 보기</Text>
        </View>
      </View>

      {/* Content Area */}
      <ScrollView
        style={[
          styles.content,
          { backgroundColor: colors.background.secondary },
        ]}
        contentContainerStyle={styles.contentContainer}
      >
        {filteredCheckNotes.length > 0 ? (
          <View style={styles.checkNotesList}>
            {filteredCheckNotes.map((checkNote) => (
              <CheckNoteItem
                key={checkNote.id}
                id={checkNote.id}
                title={checkNote.title}
                masterName={checkNote.masterName}
                participantCount={checkNote.participantCount}
                maxParticipants={checkNote.maxParticipants}
                nextCheckDate={checkNote.nextCheckDate}
                status={checkNote.status}
                isFavorite={checkNote.isFavorite}
                onPress={() => handleCheckNotePress(checkNote.id)}
                onFavoritePress={() => handleFavoritePress(checkNote.id)}
              />
            ))}
          </View>
        ) : (
          /* Empty State */
          <View style={styles.emptyState}>
            <View style={styles.illustration}>
              {/* Placeholder for illustration - you can replace with actual illustration */}
              <View style={styles.illustrationPlaceholder}>
                <Ionicons name="document-text" size={80} color="#59b3ff" />
              </View>
            </View>

            <Text style={styles.emptyTitle}>
              체크 노트를 만들고, 참여해 보세요.
            </Text>

            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={handleCreateCheckNote}
              >
                <Ionicons name="add" size={16} color="#ffffff" />
                <Text style={styles.primaryButtonText}>체크 노트 만들기</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={handleParticipateCheckNote}
              >
                <Ionicons name="flame" size={16} color="#616977" />
                <Text style={styles.secondaryButtonText}>
                  체크 노트 참여하기
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  filterSection: {
    backgroundColor: "#f1f4f7",
    paddingVertical: 24,
  },
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
  chipSelected: {
    backgroundColor: "#d9ecfc",
    borderColor: "#b4dbfc",
  },
  chipUnselected: {
    backgroundColor: "#ffffff",
    borderColor: "#e1e5ea",
  },
  chipIcon: {
    marginRight: 4,
  },
  chipText: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: -0.28,
  },
  chipTextSelected: {
    color: "#328fee",
  },
  chipTextUnselected: {
    color: "#8c96a2",
  },
  filterGroup: {
    flexDirection: "row",
    gap: 8,
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e1e5ea",
    gap: 4,
  },
  sortText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#616977",
    letterSpacing: -0.28,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e1e5ea",
    backgroundColor: "#e1e5ea",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#616977",
    letterSpacing: -0.28,
  },
  content: {
    flex: 1,
    backgroundColor: "#f1f4f7",
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  checkNotesList: {
    flex: 1,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 40,
  },
  illustration: {
    marginBottom: 24,
  },
  illustrationPlaceholder: {
    width: 192,
    height: 165,
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#191f2a",
    textAlign: "center",
    letterSpacing: -0.32,
    marginBottom: 24,
  },
  actionButtons: {
    width: "100%",
    gap: 8,
  },
  primaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#191f2a",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    gap: 8,
  },
  primaryButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: -0.28,
  },
  secondaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#616977",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    gap: 8,
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#616977",
    letterSpacing: -0.28,
  },
});

export default CheckNoteListScreen;
