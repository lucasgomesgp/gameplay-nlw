import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import DiscordImg from "../../assets/discord.png";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

type ButtonIconProps = TouchableOpacityProps & {
    title: string;
}
export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}