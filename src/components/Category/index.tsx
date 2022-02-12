import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type CategoryProps = TouchableOpacityProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckbox?: boolean;
    checked?: boolean;
}
export function Category({ title, icon: Icon, checked = false, hasCheckbox = false, ...rest }: CategoryProps) {
    const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;
    return (
        <TouchableOpacity {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[secondary50, secondary70]}
            >
                <LinearGradient
                    colors={[checked ? secondary85 : secondary50, secondary40]}
                    style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
                    {hasCheckbox &&
                        <View style={checked ? styles.checked : styles.check} />
                    }
                    <Icon
                        width={48}
                        height={48}
                    />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </TouchableOpacity>

    );
}