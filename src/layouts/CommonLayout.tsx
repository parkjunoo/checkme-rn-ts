import React from "react";
import { View } from "react-native";
import { MainHeader } from "../components/common";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";

interface CommonLayoutProps {
  children: React.ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps) {
  const navigation = useNavigation();
  const route = useRoute();
  const title = route.name;

  return (
    <View style={styles.container}>
      <MainHeader
        title={title}
        onBackPress={() => navigation.goBack()}
        backgroundColor="#FFFFFF"
        textColor="#191F2A"
        showSearch={true}
        showNotification={true}
        showMenu={true}
        onSearchPress={() => console.log("Search pressed")}
        onNotificationPress={() => console.log("Notification pressed")}
        onMenuPress={() => console.log("Menu pressed")}
      />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
