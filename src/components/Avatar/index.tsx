import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type AvatarProps = {
    urlImage: string;
}
export function Avatar({ urlImage }: AvatarProps) {
    const { secondary50, secondary70 } = theme.colors;

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[secondary50, secondary70]}
                style={styles.container}>
                <Image
                    source={{ uri: urlImage }}
                    style={styles.avatar}
                />
            </LinearGradient>
        </View>
    );
}