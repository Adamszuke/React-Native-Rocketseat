import { Text, Pressable } from "react-native";
// Pressable é para verificar se foi pressionado sem uma mostra vizual
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

export function Category(){
    return(
        <Pressable style={styles.container}>
            <MaterialIcons name="code" size={16} color={colors.gray[400]}/>
            <Text style={styles.name}>Projetos</Text>
        </Pressable>
    )
}