import { Text, View} from 'react-native';
import styles from './style'

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About App</Text>
      <Text style={styles.text}>App feito em ReactNative, contendo packages de terceiros tais como Expo Sensor's, Screen's, Touch ID e FaceId"IOS", AsyncStorage, e outros que podem ser vistos no package.json!</Text>
      <Text style={styles.text}>Repositório está postado no GitHub, o desenvolvimento foi relativamente "Fácil" ocorrendo mudanças de planso ao longo do projeto!</Text>
      <Text style={styles.text}>Projeto realizado por Gustavo Sovrani</Text>
    </View>
  );
}