import { Text, View, Button } from "react-native";


export default function Playing({navigation}){
    return(
        <View>
            <Text>Tocando agora</Text>
            <Button
                title = "Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}