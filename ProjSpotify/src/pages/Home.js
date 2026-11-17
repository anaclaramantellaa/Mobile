import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from "react-native";
import {STYLES} from "../components/Styles";
import {Feather} from "@expo/vector-icons";
import MusicBox from "../components/MusicBox";

export default function Home({navigation}){
    return(
        <View style = {Style.container}>
            <View style={Style.recomendations}>
                <View style={Style.recomendationsHeader}>
                    <Text style={Style.sectionTitle}>Bom Dia</Text>
                    <TouchableOpacity>
                        <Feather name = "settings" size ={16} color = "#fff"/>
                    </TouchableOpacity>
                </View>
                <View style={Style.recomendationsBody}>
                    <MusicBox/>
                </View>
            </View>

            <View style={Style.recents}>

            </View>

            <View style={Style.favorites}>

            </View>

            <View style={Style.playing}>
                <Button
                    title = "Player"
                    onPress={() => navigation.navigate("Playing")}
                />
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: STYLES["main-background"],
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 45
    },
    recomendations: {
        flex: 2,
    },
    recomendationsHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    recomendationsBody:{
        flex: 4,
    },
    sectionTitle:{
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',

    },  
    recents: {
        flex: 2,
    },
    favorites: {
        flex: 2,
    },
    playing: {
        flex: 1,
    }
})