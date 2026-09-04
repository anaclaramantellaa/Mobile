import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5, Feather } from '@expo/vector-icons';

export default function Icones() {
    return (
        <View style={estilos.container}>
            <TouchableOpacity style={estilos.icons}>
                <FontAwesome5 name="paste" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={estilos.icons}>
                <Feather name="tag" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={estilos.icons}>
                <Feather name="credit-card" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={estilos.icons}>
                <FontAwesome5 name="barcode" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={estilos.icons}>
                <Feather name="settings" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )

}
const estilos = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        paddingVertical: 15,
        backgroundColor: 'transparent',
        marginTop: 15
    },
    icons: {
        width: 50,
        height: 50,
        borderRadius: 25, 
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'center',
    }

})