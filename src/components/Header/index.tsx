import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  title: string;
  action?: ReactNode;
};
export function Header({ title, action }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  const { secondary100, secondary40, heading } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <TouchableOpacity onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </LinearGradient>
  );
}
