import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    principal:{
        width: 180,
        height: 56,
        backgroundColor: theme.colors.primary,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 15,
        borderRadius: 8,
        marginLeft: 14,
    },
    btn:{
        width: 180,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.heading,
    },
    text:{
        fontSize: 18,
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
    }
});