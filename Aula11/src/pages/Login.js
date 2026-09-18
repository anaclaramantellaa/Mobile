import { TextInput, Touchable, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet} from "react-native";

 export default function Login({navigation}){
    return(
        <View style={estilo.container}>
            <View style={estilo.card}>
                <Text style={estilo.titulo}>Login</Text>
                <View>
                <Text style={estilo.label}>Username</Text>
                <TextInput 
                    style={estilo.inputs}
                />
                <Text style={estilo.label}>Password</Text>
                <TextInput 
                    style={estilo.inputs}
                />
                <TouchableOpacity>
                    <Text style={estilo.textoBotao}>Login</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
 }
 const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#F0C7C1',
        padding: 10
    },
    card: {
        backgroundColor: '#0ABFBC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100%',
        height: '100%',
        borderRadius: 40
    },
    titulo: {
        marginTop: 20,
        fontSize: 46,
        color: '#BFEAF1'
    },
    inputs: {
        backgroundColor: '#D3D3D3',
        fontSize: 16,
        padding: 10,
        borderRadius: 20, 
        width: '100%'
    },
    inputArea: {
        gap: 12
    },
    label: {
        color: '#7FD5'
    },
    botao: {
        backgroundColor: 
    }
 })