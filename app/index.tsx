import { Text, View } from "react-native";
import "./globals.css";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text className="text-blue-700 text-5xl">Welcome!</Text>
    </View>
  );
}
