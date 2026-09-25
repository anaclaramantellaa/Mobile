import {createNativeStackNavigator} from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

import TelaDetalhes from "../pages/TelaDetalhes";

export default function RootNavigator(){
    return(
        <Stack.Navigator id='RootStack' screeOptions={{headerShown: false}}>
            <Stack.Screen name='Principal' component={TabNavigator}/>
            <Stack.Screen name='Detalhes' component={TelaDetalhes}/>
        </Stack.Navigator>
    )
} 