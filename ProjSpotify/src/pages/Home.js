import { View, Text, Button } from "react-native";


export default function Home({navigation}){
    return(
        <View style="">
            <Text>Home</Text>
            <Button
                title = "Player"
                onPress={() => navigation.navigate("Playing")}
            />
        </View>
    )
}