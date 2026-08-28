import {StyleSheet, View } from "react-native";
import PerfilCard from "../components/PerfilCard";

export default function Home(){
    return(
        <View style={estilos.tela}>
            <PerfilCard nome='Isadora' cargo='Recepcionista' cor='#118A'/>
            <PerfilCard nome='Ana' cargo='Vendedora' cor='#4682B4'/>
        </View>
    )
}

const estilos = StyleSheet.create({
    tela:{
        flex: 1,
        justifyContent: 'center', 
        paddingHorizontal: 20,
        color: '#f0f0f0'
    }
})