import { Button } from "react-native";

export default function BotaoCurtir({nomePost, aoPressionar}){
    return(
        <Button
            title='curtir'
            color='#EF476F'
            onPress={() => aoPressionar(nomePost)}
        />
    )
}