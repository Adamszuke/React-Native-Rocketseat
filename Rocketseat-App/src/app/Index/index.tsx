import {View, Image, TouchableOpacity} from "react-native"

import {styles} from "./styles"
import {MaterialIcons} from "@expo/vector-icons"
import { colors } from "@/styles/colors"

import { Category } from "@/components/category"

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

            <Category/>
        </View>
    )
}

