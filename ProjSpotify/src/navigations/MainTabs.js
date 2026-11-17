import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//importando as telas que serão abas
import HomeStack from "../navigations/HomeStack"
import Search from "../pages/Search";
import Library from "../pages/Library";
import Premium from "../pages/Premium";
import CreatePlaylist from "../pages/CreatePlaylist";

//instanciando um objeto de navegação do tipo BottomTab
const Tabs = createBottomTabNavigator();

export default function MainTabs(){
    return(
        <Tabs.Navigator screenOptions={{headerShown: false}}>
            <Tabs.Screen
                name = "HomeStack"
                component={HomeStack}
                options={{title: 'Home'}}
            />
            <Tabs.Screen
                name = "Search"
                component={Search}
                options={{title: 'Serch'}}
            />
            <Tabs.Screen
                name = "Library"
                component={Library}
                options={{title: 'Library'}}
            />
            <Tabs.Screen
                name = "Premium"
                component={Premium}
                options={{title: 'Premium'}}
            />
            <Tabs.Screen
                name = "CreatePlaylist"
                component={CreatePlaylist}
                options={{title: 'Create'}}
            />

        </Tabs.Navigator>
    )
}