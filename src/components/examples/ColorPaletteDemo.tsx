import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../../theme/tokens";

const ColorPaletteDemo: React.FC = () => {
  const renderColorSwatch = (
    name: string,
    color: string,
    description?: string
  ) => (
    <View key={name} style={styles.colorSwatch}>
      <View style={[styles.colorBox, { backgroundColor: color }]} />
      <View style={styles.colorInfo}>
        <Text style={styles.colorName}>{name}</Text>
        <Text style={styles.colorValue}>{color}</Text>
        {description && (
          <Text style={styles.colorDescription}>{description}</Text>
        )}
      </View>
    </View>
  );

  const renderColorScale = (
    scaleName: string,
    scale: Record<string, string>
  ) => (
    <View key={scaleName} style={styles.colorScale}>
      <Text style={styles.scaleTitle}>{scaleName}</Text>
      <View style={styles.scaleContainer}>
        {Object.entries(scale).map(([key, value]) => (
          <View key={key} style={styles.scaleItem}>
            <View style={[styles.scaleColorBox, { backgroundColor: value }]} />
            <Text style={styles.scaleKey}>{key}</Text>
            <Text style={styles.scaleValue}>{value}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Color Palette from Figma</Text>

      {/* Primary Blue Scale */}
      {renderColorScale("Primary Blue", colors.primary)}

      {/* Neutral Gray Scale */}
      {renderColorScale("Neutral Gray", colors.neutral)}

      {/* System Colors */}
      <View style={styles.colorScale}>
        <Text style={styles.scaleTitle}>System Colors</Text>
        <View style={styles.scaleContainer}>
          {renderColorSwatch("Green", colors.system.green, "Success color")}
          {renderColorSwatch("Red", colors.system.red, "Error color")}
        </View>
      </View>

      {/* Check Colors */}
      <View style={styles.colorScale}>
        <Text style={styles.scaleTitle}>Check Colors</Text>
        <View style={styles.scaleContainer}>
          {renderColorSwatch(
            "Check Blue",
            colors.system.check.blue,
            "Check 01"
          )}
          {renderColorSwatch(
            "Check Teal",
            colors.system.check.teal,
            "Check 02"
          )}
          {renderColorSwatch("Check Red", colors.system.check.red, "Check 03")}
          {renderColorSwatch(
            "Check Purple",
            colors.system.check.purple,
            "Check 04"
          )}
          {renderColorSwatch(
            "Check Yellow",
            colors.system.check.yellow,
            "Check 05"
          )}
          {renderColorSwatch(
            "Check Pink",
            colors.system.check.pink,
            "Check 06"
          )}
        </View>
      </View>

      {/* Semantic Colors */}
      <View style={styles.colorScale}>
        <Text style={styles.scaleTitle}>Semantic Colors</Text>
        <View style={styles.scaleContainer}>
          {renderColorSwatch("Background Primary", colors.background.primary)}
          {renderColorSwatch(
            "Background Secondary",
            colors.background.secondary
          )}
          {renderColorSwatch("Text Primary", colors.text.primary)}
          {renderColorSwatch("Text Secondary", colors.text.secondary)}
          {renderColorSwatch("Text Tertiary", colors.text.tertiary)}
          {renderColorSwatch("Border Primary", colors.border.primary)}
        </View>
      </View>

      {/* Figma Specific Colors */}
      <View style={styles.colorScale}>
        <Text style={styles.scaleTitle}>Figma Specific Colors</Text>
        <View style={styles.scaleContainer}>
          {renderColorSwatch("Master", colors.figma.master, "Master status")}
          {renderColorSwatch(
            "Master Background",
            colors.figma.masterBg,
            "Master background"
          )}
          {renderColorSwatch(
            "Master Border",
            colors.figma.masterBorder,
            "Master border"
          )}
          {renderColorSwatch(
            "Badge Selected",
            colors.figma.badgeSelected,
            "Selected badge"
          )}
          {renderColorSwatch(
            "Badge Unselected",
            colors.figma.badgeUnselected,
            "Unselected badge"
          )}
          {renderColorSwatch(
            "Button Primary",
            colors.figma.buttonPrimary,
            "Primary button"
          )}
          {renderColorSwatch(
            "Button Secondary",
            colors.figma.buttonSecondary,
            "Secondary button"
          )}
          {renderColorSwatch(
            "Card Background",
            colors.figma.cardBackground,
            "Card background"
          )}
          {renderColorSwatch(
            "Card Border",
            colors.figma.cardBorder,
            "Card border"
          )}
          {renderColorSwatch(
            "Thumbnail Background",
            colors.figma.thumbnailBg,
            "Thumbnail background"
          )}
        </View>
      </View>

      {/* Usage Examples */}
      <View style={styles.usageSection}>
        <Text style={styles.usageTitle}>Usage Examples</Text>

        <View style={styles.exampleCard}>
          <Text style={styles.exampleTitle}>Primary Button</Text>
          <View
            style={[
              styles.exampleButton,
              { backgroundColor: colors.primary[500] },
            ]}
          >
            <Text style={styles.exampleButtonText}>Click me</Text>
          </View>
        </View>

        <View style={styles.exampleCard}>
          <Text style={styles.exampleTitle}>Status Badge</Text>
          <View
            style={[
              styles.exampleBadge,
              {
                backgroundColor: colors.figma.masterBg,
                borderColor: colors.figma.masterBorder,
              },
            ]}
          >
            <Text
              style={[styles.exampleBadgeText, { color: colors.figma.master }]}
            >
              Master
            </Text>
          </View>
        </View>

        <View style={styles.exampleCard}>
          <Text style={styles.exampleTitle}>Card Component</Text>
          <View
            style={[
              styles.exampleCardComponent,
              {
                backgroundColor: colors.figma.cardBackground,
                borderColor: colors.figma.cardBorder,
              },
            ]}
          >
            <Text
              style={[styles.exampleCardTitle, { color: colors.text.primary }]}
            >
              Card Title
            </Text>
            <Text
              style={[styles.exampleCardText, { color: colors.text.secondary }]}
            >
              Card description text
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F4F7",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#191F2A",
    marginBottom: 24,
    textAlign: "center",
  },
  colorScale: {
    marginBottom: 32,
  },
  scaleTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#191F2A",
    marginBottom: 16,
  },
  scaleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  scaleItem: {
    alignItems: "center",
    width: 80,
  },
  scaleColorBox: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E1E5EA",
  },
  scaleKey: {
    fontSize: 12,
    fontWeight: "600",
    color: "#191F2A",
    marginBottom: 2,
  },
  scaleValue: {
    fontSize: 10,
    color: "#616977",
    textAlign: "center",
  },
  colorSwatch: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E1E5EA",
    width: "100%",
  },
  colorBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#E1E5EA",
  },
  colorInfo: {
    flex: 1,
  },
  colorName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#191F2A",
    marginBottom: 2,
  },
  colorValue: {
    fontSize: 12,
    color: "#616977",
    marginBottom: 2,
  },
  colorDescription: {
    fontSize: 10,
    color: "#8C96A2",
  },
  usageSection: {
    marginTop: 24,
  },
  usageTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#191F2A",
    marginBottom: 16,
  },
  exampleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E1E5EA",
  },
  exampleTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#191F2A",
    marginBottom: 8,
  },
  exampleButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  exampleButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  exampleBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    alignSelf: "flex-start",
  },
  exampleBadgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  exampleCardComponent: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  exampleCardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  exampleCardText: {
    fontSize: 14,
  },
});

export default ColorPaletteDemo;
