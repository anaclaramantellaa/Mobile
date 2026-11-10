import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

import Home from "../pages/Home";
import Playing from "../pages/Playing";

export default function HomeStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name = "Home"
                component={Home}
            />
            <Stack.Screen
                name = "Playing"
                component={Playing}
            />
        </Stack.Navigator>
    )
}