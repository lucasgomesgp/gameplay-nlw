import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type ButtonIconProps = TouchableOpacityProps & {
    title: string;
}
export function Button({ title, ...rest }: ButtonIconProps) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}