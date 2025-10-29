import {View, Image, TouchableOpacity, FlatList} from "react-native"

import {styles} from "./styles"
import {MaterialIcons} from "@expo/vector-icons"
import { colors } from "@/styles/colors"

import {Link} from "@/components/link"
import { Categories } from "@/components/categories"


export default function Index(){
    return(
        <View style={styles.container}>  
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo}></Image>


                <TouchableOpacity activeOpacity={0.1} >
                    {/* Controla a opacidade do botão ao ser clicado e a intensidade*/}
                    <MaterialIcons name="add" size={32} color={colors.green[300]}/>
                </TouchableOpacity>
            </View>


            <Categories/>
            
            <Link
                name="Rockeseat"
                url="https://app.rocketseat.com.br/"
                onDetails={() => console.log("Clicou")}
            />
        </View>

    )
}

