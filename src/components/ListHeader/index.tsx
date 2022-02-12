import { Text, View } from "react-native";
import { styles } from "./styles";

type ListHeaderProps = {
    title: string;
    subTitle: string;
};

export function ListHeader({ title, subTitle }: ListHeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.subTitle}>
                {subTitle}
            </Text>
        </View>
    );
}