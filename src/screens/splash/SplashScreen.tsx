import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.8));
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Start animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Navigate to main screen after loading
          setTimeout(() => {
            onFinish();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, [fadeAnim, scaleAnim, onFinish]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#ffffff" }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Logo Section */}
        <Animated.View
          style={[
            styles.logoSection,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          {/* App Icon */}
          <View style={[styles.logoContainer, { backgroundColor: "#328FEE" }]}>
            <Ionicons name="checkmark-circle" size={60} color="#ffffff" />
          </View>

          {/* App Name */}
          <Text style={[styles.appName, { color: "#191F2A" }]}>CheckMe</Text>

          {/* App Tagline */}
          <Text style={[styles.tagline, { color: "#616977" }]}>
            함께하는 체크 노트
          </Text>
        </Animated.View>

        {/* Loading Section */}
        <Animated.View
          style={[
            styles.loadingSection,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          {/* Loading Bar */}
          <View
            style={[styles.loadingBarContainer, { backgroundColor: "#F1F4F7" }]}
          >
            <View
              style={[
                styles.loadingBar,
                {
                  width: `${loadingProgress}%`,
                  backgroundColor: "#328FEE",
                },
              ]}
            />
          </View>

          {/* Loading Text */}
          <Text style={[styles.loadingText, { color: "#8C96A2" }]}>
            {loadingProgress < 100 ? "로딩 중..." : "완료!"}
          </Text>
        </Animated.View>
      </View>

      {/* Footer */}
      <Animated.View
        style={[
          styles.footer,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Text style={[styles.versionText, { color: "#8C96A2" }]}>v1.0.0</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  logoSection: {
    alignItems: "center",
    marginBottom: 64,
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  appName: {
    fontSize: 32,
    fontWeight: "800",
    letterSpacing: -0.64,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: -0.32,
    textAlign: "center",
  },
  loadingSection: {
    alignItems: "center",
    width: "100%",
  },
  loadingBarContainer: {
    width: "100%",
    height: 4,
    borderRadius: 2,
    marginBottom: 12,
    overflow: "hidden",
  },
  loadingBar: {
    height: "100%",
    borderRadius: 2,
  },
  loadingText: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: -0.28,
  },
  footer: {
    paddingBottom: 24,
  },
  versionText: {
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: -0.24,
  },
});

export default SplashScreen;
