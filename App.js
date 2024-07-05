import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.size}>My name is 
      <Text style={{ fontWeight: 'bold'}}> Charles </Text> 
          </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73e600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  size: {
    fontSize: 24
  }
});
