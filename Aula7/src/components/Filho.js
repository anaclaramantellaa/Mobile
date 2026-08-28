import { View, Text } from "react-native";
import Neto from "../components/Neto"

export default function Filho(mensagemPai, caixaPostalPai){
    return(
        <View>
            <Text>Eu sou filho!!</Text>
            <Neto mensagemAvo={mensagemPai} caixaPostalAvo={caixaPostalPai}/>
        </View>
    )
}