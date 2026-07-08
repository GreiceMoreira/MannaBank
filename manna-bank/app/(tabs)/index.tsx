import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={style.HeaderTitle}>Manna Bank</Text>
    </View>
  );
}

const style = StyleSheet.create({
  HeaderTitle: {
    color: "rgba(5, 140, 243, 0.2)",
    fontStyle: "italic",
    fontSize: 100,
  }
});