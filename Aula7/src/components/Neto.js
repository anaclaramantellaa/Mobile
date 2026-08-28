import { Button } from "react-native";
import { View, Text } from "react-native";

export default function Neto(mensagemAvo, caixaPostalAvo){
    return(
        <View>
            <Text>Eu sou neto!!</Text>
            <Text>{mensagemAvo}</Text>
            <Button
                title="falar com avô"
                onPress={() => caixaPostalAvo("Bença vô")}
            />
        </View>
    )
}