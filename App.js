import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Aura from './src/components/Aura';
import {Aura9k} from '.src/components/Aura';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txtNegrito}>Olá Mundo!</Text>
      <Text>Você sabe trocar chuveiro?</Text>
      <Text>Você sabe farmar aura?</Text>
      <Text style={styles.txtDiferente}>Aura + Ego</Text>
      <Aura />
      <Aura9k />
      <StatusBar style="auto" />
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
  txtNegrito: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  txtDiferente: {
    marginTop: 16,
    color: 'blue',
  }
});
