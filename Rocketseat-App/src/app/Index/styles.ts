import {Text, View, StyleSheet} from "react-native"

import {colors} from "@/styles/colors"


export const styles = StyleSheet.create({
    container: {
        flex:1,
        // justifyContent: "center",
        // alignItems: "center",
        paddingTop:24,
    },
    tittle: {
        color: "colors.green.900",
        fontSize: 22,
    },
    header: {
        paddingHorizontal: 16,
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32,
    },
    logo: {
        height: 64,
        width: 64,
    }
})