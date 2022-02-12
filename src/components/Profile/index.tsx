import { Text, View, TouchableOpacity, Alert } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

type ProfileProps = {
  setVisible: (value: boolean) => void;
};
export function Profile({ setVisible }: ProfileProps) {
  const { user } = useAuth();
  function handleSignOut() {
    setVisible(true);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut}>
        <Avatar urlImage={user.avatar} />
      </TouchableOpacity>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
