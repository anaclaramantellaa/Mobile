import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/routes/RootNavigator";

export default function App2(){
    return(
        <NavigationContainer id='RootStack'>
            <RootNavigator/>
        </NavigationContainer>
    )
}