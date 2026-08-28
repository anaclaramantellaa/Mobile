import { View } from "react-native";
import Filho from "../components/Filho"

export default function Avo(){
    function mensagemNeto(msgNeto){
        console.log("Mensagem do neto: ", msgNeto);
    }
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Filho mensagemPai="Olá meu neto" caixaPostalPai={mensagemNeto}/>
        </View>
    )
}