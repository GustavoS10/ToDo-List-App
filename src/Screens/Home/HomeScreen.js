import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List App</Text>
      <Text style={styles.text}> Welcome to your favorite ToDo List app!</Text>
      <Text style={styles.text}> Now you can create any notes to remember what you sould do in your next day!</Text>
      <Text style={styles.text}> You can navigate using bottom navbar!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


