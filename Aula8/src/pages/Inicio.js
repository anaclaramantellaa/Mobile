import { View, StyleSheet } from 'react-native';
import Header from "../components/Header";
import Icones from '../components/Icones';

export default function Inicio(){
  return(
    <View style={estilos.container}>
      <Header/>
      <Icones/>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
});