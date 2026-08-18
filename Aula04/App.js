import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {FontAwesome5, Feather} from '@expo/vector-icons';

const ITENS_MENU =[
  {icone: 'user', texto:'Meu Perfil'},
  {icone: 'settings', texto:'Configurações'},
  {icone: 'bell', texto:'Notificações'},
  {icone: 'log-out', texto:'Sair'},
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aula #04</Text>
      {
        ITENS_MENU.map( (atual) => (<ItemMenu icone={atual.icone} texto={atual.texto} key={atual.texto}/>) )
      }
      {/*<ItemMenu icone="user" texto="Perfil"/>*/}
      <Image source={{uri: 'https://static.wikia.nocookie.net/universocinematograficomarvel/images/c/ca/Deadpool.png/revision/latest?cb=20240722011551&path-prefix=pt'}}
        style={styles.imagem}/>
      <Image source={require('./src/assets/periquito.jpg')} style={styles.imagem}/>
    </View>
  );
}

function ItemMenu({icone,texto}){
    return(
      <TouchableOpacity style={styles.linha}>
          <View style={styles.iconeCirculo}>
              <Feather name={icone} size={24} color={'#999'}/>
          </View>
          <Text style={styles.textoLinha}>{texto}</Text>
          <Feather name="chevron-right" size={20} color='#999'/>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
    paddingHorizontal: 16
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  iconeCirculo:{
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#000080',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  textoLinha:{
    fontSize: 16,
    flex: 1
  },
  imagem:{
    width: 160,
    height: 212,
    marginTop: 16
  }
});
