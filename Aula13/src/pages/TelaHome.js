import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

export default function TelaHome({navigation}){
    return(
        <SafeAreaView style={estilos.tela}>
            <Text style={estilos.titulo}>Home</Text>
            <Text style={estilos.nota}>Use o gesto de arrastar ou o botão</Text>
            <Button 
                title="Abrir Detalhes"
                //onPress={()=>navigation.openDrawer()}    
                onPress={()=>navigation.navigate('Detalhes')}    
            />
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: "#fff"
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#21295C'
    },
    nota: {
        fontSize: 13,
        color: '#5b5b5b',
        textAlign: 'center',
        marginTop: 24
    }
})