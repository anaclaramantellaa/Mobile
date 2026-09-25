import { View, Text } from "react-native";

export default function TelaSobre({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#21295C' }}>Sobre</Text>
            <Button
                title="Abrir Menu"
                onPress={() => navigation.openDrawer()}
            />
        </View>
    )
}