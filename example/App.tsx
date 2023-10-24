import * as MichaelessietMinimizeApp from "@michaelessiet/minimize-app";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button onPress={MichaelessietMinimizeApp.minimize} title="Minimize" />
      <Button onPress={MichaelessietMinimizeApp.goBack} title="Go Back" />
      <Button onPress={MichaelessietMinimizeApp.exit} title="Exit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
