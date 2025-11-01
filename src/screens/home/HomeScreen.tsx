import { View, Text } from "react-native";
import { Button } from "../../components/common";
import CommonLayout from "../../layouts/CommonLayout";

export default function HomeScreen() {
  return (
    <CommonLayout>
      <Button title="Click me" onPress={() => {}} />
      <Button title="Click me" onPress={() => {}} variant="secondaryA" />
      <Button title="Click me" onPress={() => {}} variant="secondaryB" />
      <Button title="Click me" onPress={() => {}} variant="text" />
      <Text>Home Screen Content</Text>
    </CommonLayout>
  );
}
