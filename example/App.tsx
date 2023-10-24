import { StyleSheet, Text, View } from 'react-native';

import * as MichaelessietMinimizeApp from '@michaelessiet/minimize-app';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{MichaelessietMinimizeApp.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
