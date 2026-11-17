import { Image, StyleSheet, View, Text } from "react-native";
import {STYLES} from "../components/Styles";

export default function MusicBox({navigation}){
    return(
        <View style={Styles.container}>
            <View style={Styles.imageBkg}>
                <Image source={require('../assets/1200x1200bf-60.jpg')} style={Styles.image}/>
            </View>
            <View style={Styles.description}>
                <Text style={Styles.mainDescription}>Descobertas da semana</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: STYLES["music-box-bkg"],
        flexDirection: 'row',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageBkg:{
        flex: 1,
    },
    description:{
        flex: 2,
        alignItems: 'center',
        paddingStart: 12,
    },
    mainDescription: {
        color: STYLES["main-text"],
        fontSize: 20,
        fontWeight: '600'
    }
})