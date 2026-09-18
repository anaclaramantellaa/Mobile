import { View, Text, StyleSheet, Button } from "react-native";

const USUARIO_LOGADO = {
    id: 1,
    nome: 'Helton Azevedo',
    login: 'hazevedo',
    dataCadastro: '01/01/2026'
}

export default function Home({navigation}){
    return(
        <View style= {estilo.container}>
            <Text style= {estilo.titulo}>Home</Text>
            <Text style= {estilo.texto}>Bem-vindo a tela principal do APP</Text>
            <Button
                title="Ir para sobre"
                color="#118AB2"
                onPress={() => navigation.navigate('Sobre', USUARIO_LOGADO)}
            />
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