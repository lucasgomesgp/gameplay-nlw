import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Alert,
  Platform,
  Share,
} from "react-native";
import * as Linking from "expo-linking";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";
import { ListHeader } from "../../components/ListHeader";
import { Member, MemberProps } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { AppointmentProps } from "../../components/Appointment";
import { api } from "../../services/api";
import { Load } from "../../components/Load";

type RouteParams = {
  guildSelected: AppointmentProps;
};

type WidgetProps = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

export function AppointmentDetails() {
  const navigation = useNavigation();
  const routes = useRoute();
  const [loading, setLoading] = useState(true);
  const { guildSelected } = routes.params as RouteParams;
  const [widget, setWidget] = useState<WidgetProps>({} as WidgetProps);
  async function fetchGuildWidget() {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );
      setWidget(response.data);
    } catch (error) {
      Alert.alert("Problema no servidor do Discord",
        "Verifique as configurações do servidor. Será que o Widget está habilitado?"
      );
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message =
      Platform.OS === "ios"
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;
    Share.share({
      message,
      url: widget.instant_invite
        ? widget.instant_invite
        : "https://discord.com",
    });
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }
  useEffect(() => {
    fetchGuildWidget();
  }, []);
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner && (
            <TouchableOpacity onPress={handleShareInvitation}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </TouchableOpacity>
          )
        }
      />
      <ImageBackground style={styles.banner} source={BannerImg}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subTitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>
      {loading ? (
        <Load />
      ) : widget.members ? (
        <>
          <ListHeader
            title="Jogadores"
            subTitle={`Total ${widget.members.length}`}
          />
          <FlatList
            data={widget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
            style={styles.members}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
          />
        </>
      ) : (
        <Text style={styles.noMembers}>Sem membros no momento</Text>
      )}
      {guildSelected.guild.owner && (
        <View style={styles.footer}>
          <ButtonIcon title="Entrar na partida" onPress={handleOpenGuild} />
        </View>
      )}
    </Background>
  );
}
