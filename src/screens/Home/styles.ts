import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: "100%",
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,
    },
    matches: {
        marginTop: 24,
        marginLeft: 24,
    },
    containerModal: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    modalTexts: {
        width: "100%",
        height: 174,
        backgroundColor: theme.colors.overlay,
        marginTop: 520,
    },
    text: {
        marginTop: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    gameplay: {
        flexDirection: "row",
        marginLeft: 4,
    },
    initialText: {
        fontSize: 24,
        color: theme.colors.heading,
        fontFamily: theme.fonts.title500,
        textAlign: "center",
        letterSpacing: 2,
        
    },
    whiteText: {
        fontSize: 24,
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,

    },
    primaryText: {
        fontSize: 24,
        fontFamily: theme.fonts.title700,
        color: theme.colors.primary,
    },
    actions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 23,
    }
});