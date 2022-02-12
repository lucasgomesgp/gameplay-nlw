import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width: 62,
        height: 66,
        backgroundColor: theme.colors.discord,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        overflow: "hidden",
    },
    image:{
        width: 62,
        height: 66,
        borderRadius: 8,
    },
    
});