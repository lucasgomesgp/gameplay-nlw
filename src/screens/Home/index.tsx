import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FlatList, Modal, Text, TouchableWithoutFeedback, View } from "react-native";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { Load } from "../../components/Load";
import { styles } from "./styles";
import { ButtonAction } from "../../components/ButtonAction";

export function Home() {
  const navigation = useNavigation();
  const [appointments, setAppointments] = useState<AppointmentProps[]>();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [modalVisible, setVisibleModal] = useState(false);
  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate("AppointmentDetails", { guildSelected });
  }
  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  function handleSetCategory(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }
    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );
  return (
    <Background>
      <View style={styles.header}>
        <Profile setVisible={setVisibleModal}/>
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleSetCategory}
        hasChecked={true}
      />
      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Partidas agendadas"
            subTitle={`Total ${appointments?.length}`}
          />
          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            style={styles.matches}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 69 }}
          />
        </>
      )}
      <Modal transparent animationType="slide" visible={modalVisible} statusBarTranslucent>
        <View style={styles.containerModal}>
          <View style={styles.modalTexts}>
            <Background>
              <View style={styles.text}>
                <Text style={styles.initialText}>Deseja sair do</Text>
                <View style={styles.gameplay}>
                  <Text style={styles.whiteText}>Game</Text>
                  <Text style={styles.primaryText}>Play?</Text>
                </View>
              </View>
              <View style={styles.actions}>
                <ButtonAction name="Não" visible={setVisibleModal}/>
                <ButtonAction name="Sim" visible={setVisibleModal} principal />
              </View>
            </Background>
          </View>
        </View>
      </Modal>
    </Background>
  );
}
