import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./styles";

type ButtonActionProps = TouchableOpacityProps & {
  name: string;
  principal?: boolean;
  visible: (value: boolean) => void;
};
export function ButtonAction({
  name,
  principal,
  visible,
  ...rest
}: ButtonActionProps) {
  const { signOut, user } = useAuth();

  function handleAction() {
    if (principal && user.id) {
      signOut();
    } else {
      visible(false);
    }
  }
  return (
    <TouchableOpacity
      style={principal ? styles.principal : styles.btn}
      {...rest}
      onPress={handleAction}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}
