import { View, Text, StyleSheet, Button } from "react-native";

export default function Sobre({navigation, route}){
    const {nome, dataCadastro} = route.params;

    return(
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Sobre</Text>
            <Text style={estilo.texto}>Essa tela foi empilhada sobre a Home</Text>
            <Button
                title="voltar"
                color="#585858"
                onPress={() => navigation.goBack()}
            />
            <Text style={estilo.texto}>Usuario logado: {nome} || Cadastrado em: {dataCadastro}</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
    },
    texto: {
        fontSize: 14,
        color: '#585858',
        textAlign: 'center', 
        marginBottom: 24
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#21295C',
        marginBottom: 12
    }
})