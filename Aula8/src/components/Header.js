import { View, Text, StyleSheet } from "react-native";
import {FontAwesome5, Feather} from '@expo/vector-icons';

export default function Header(){
    
    return(
        <View style={estilos.container}>
            <View style={estilos.caixaAzul}>
                <Text style={estilos.nome}>Ana Mantella</Text>
                <FontAwesome5 name="user-circle" size={24} color="#f0f0f0" style={estilos.user}/>
            </View>
        <View style={estilos.caixaSaldo}>
            <Text style={estilos.saldo}>Saldo</Text>
            <Text style={estilos.gastos}>Gastos</Text>
        </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1, 
        //justifyContent: 'center', 
        //alignItems: 'center', 
        backgroundColor: '#CBCBCB'
    },
    caixaAzul:{
        backgroundColor: '#000080', 
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nome: {
        color: '#ffffff',
        position: 'absolute',
        fontSize: 16,
        top: 50,
        left: 30,
    },
    user: {
        position: 'absolute',
        top: 50,
        right: 30
    },
    caixaSaldo:{
        backgroundColor: '#f0f0f0', 
        width: '100%',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: -30
    },
    saldo:{
         color: '#CBCBCB',
        position: 'absolute',
        fontSize: 20,
        top: 20,
        left: 30,
    },
    gastos:{
        color: '#CBCBCB',
        position: 'absolute',
        fontSize: 20,
        top: 20,
        right: 30,
    }
})