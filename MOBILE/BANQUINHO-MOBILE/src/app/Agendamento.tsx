import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import { router } from "expo-router";

export default function Agendamento() {
  const [servico, setServico] = useState("Corte");
  const [data, setData] = useState(25);
  const [horario, setHorario] = useState("10:00");
  const [nome, setNome] = useState("");

  const datas = [
    { dia: 25, semana: "DOM" },
    { dia: 26, semana: "SEG" },
    { dia: 27, semana: "TER" },
    { dia: 28, semana: "QUA" },
    { dia: 29, semana: "QUI" },
  ];

  const horarios = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  function confirmarAgendamento() {
    if (!nome.trim()) {
      Alert.alert(
        "Atenção",
        "Digite seu nome para confirmar o agendamento."
      );
      return;
    }

    Alert.alert(
      "Agendamento confirmado!",
      `Nome: ${nome}\nServiço: ${servico}\nData: ${data}\nHorário: ${horario}`
    );
  }

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Pressable
          style={styles.headerButton}
          onPress={() => router.back()}
        >
          <Text style={styles.voltar}>‹</Text>
        </Pressable>

        <Text style={styles.titulo}>
          💈 Agendar Corte
        </Text>

        <Pressable style={styles.headerButton}>
          <Text style={styles.perfil}>♙</Text>
        </Pressable>
      </View>

      {/* SERVIÇO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          ✂️ Qual serviço?
        </Text>

        <View style={styles.servicos}>
          <Pressable
            style={[
              styles.servicoButton,
              servico === "Corte" && styles.selecionado,
            ]}
            onPress={() => setServico("Corte")}
          >
            <Text style={styles.servicoIcon}>✂️</Text>
            <Text
              style={[
                styles.servicoText,
                servico === "Corte" && styles.textoSelecionado,
              ]}
            >
              Corte
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.servicoButton,
              servico === "Corte + Barba" && styles.selecionado,
            ]}
            onPress={() => setServico("Corte + Barba")}
          >
            <Text style={styles.servicoIcon}>🧔</Text>
            <Text
              style={[
                styles.servicoText,
                servico === "Corte + Barba" &&
                  styles.textoSelecionado,
              ]}
            >
              Corte + Barba
            </Text>
          </Pressable>
        </View>
      </View>

      {/* DATA */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          📅 Escolha a data
        </Text>

        <View style={styles.datas}>
          {datas.map((item) => (
            <Pressable
              key={item.dia}
              style={[
                styles.dataButton,
                data === item.dia && styles.selecionado,
              ]}
              onPress={() => setData(item.dia)}
            >
              <Text
                style={[
                  styles.numeroData,
                  data === item.dia &&
                    styles.textoSelecionado,
                ]}
              >
                {item.dia}
              </Text>

              <Text
                style={[
                  styles.semana,
                  data === item.dia &&
                    styles.textoSelecionado,
                ]}
              >
                {item.semana}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* HORÁRIOS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          🕐 Horários disponíveis
        </Text>

        <View style={styles.horarios}>
          {horarios.map((hora) => (
            <Pressable
              key={hora}
              style={[
                styles.horarioButton,
                horario === hora && styles.selecionado,
              ]}
              onPress={() => setHorario(hora)}
            >
              <Text
                style={[
                  styles.horarioText,
                  horario === hora &&
                    styles.textoSelecionado,
                ]}
              >
                {hora}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* NOME */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          ♙ Nome
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#777777"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      {/* BOTÃO CONFIRMAR */}
      <Pressable
        style={styles.confirmarButton}
        onPress={confirmarAgendamento}
      >
        <Text style={styles.confirmarText}>
          📅 CONFIRMAR AGENDAMENTO
        </Text>
      </Pressable>

      {/* SEGURANÇA */}
      <Text style={styles.seguranca}>
        🛡️ Seus dados estão seguros conosco.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#0d0f10",
  },

  container: {
    width: "100%",
    paddingBottom: 35,
  },

  /* CABEÇALHO */
  header: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#292929",
  },

  headerButton: {
    width: 45,
    alignItems: "center",
    justifyContent: "center",
  },

  voltar: {
    color: "#e9b958",
    fontSize: 42,
    lineHeight: 42,
  },

  perfil: {
    color: "#e9b958",
    fontSize: 30,
  },

  titulo: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "700",
  },

  /* SEÇÕES */
  section: {
    paddingHorizontal: 18,
    marginTop: 30,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 18,
  },

  /* SERVIÇOS */
  servicos: {
    flexDirection: "row",
    gap: 10,
  },

  servicoButton: {
    flex: 1,
    minHeight: 80,
    borderWidth: 2,
    borderColor: "#454545",
    borderRadius: 14,
    backgroundColor: "#111415",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  servicoIcon: {
    fontSize: 22,
  },

  servicoText: {
    color: "#ffffff",
    fontSize: 15,
  },

  /* DATA */
  datas: {
    flexDirection: "row",
    gap: 7,
  },

  dataButton: {
    flex: 1,
    height: 85,
    borderWidth: 2,
    borderColor: "#454545",
    borderRadius: 12,
    backgroundColor: "#111415",
    alignItems: "center",
    justifyContent: "center",
  },

  numeroData: {
    color: "#ffffff",
    fontSize: 27,
    fontWeight: "700",
  },

  semana: {
    color: "#bdbdbd",
    fontSize: 11,
    fontWeight: "700",
    marginTop: 8,
  },

  /* HORÁRIOS */
  horarios: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  horarioButton: {
    width: "48%",
    height: 65,
    borderWidth: 2,
    borderColor: "#454545",
    borderRadius: 12,
    backgroundColor: "#111415",
    alignItems: "center",
    justifyContent: "center",
  },

  horarioText: {
    color: "#ffffff",
    fontSize: 19,
  },

  /* SELECIONADO */
  selecionado: {
    borderColor: "#e9b958",
    backgroundColor: "#211f1a",
  },

  textoSelecionado: {
    color: "#e9b958",
  },

  /* NOME */
  input: {
    width: "100%",
    height: 65,
    backgroundColor: "#111415",
    borderWidth: 2,
    borderColor: "#454545",
    borderRadius: 12,
    color: "#ffffff",
    fontSize: 18,
    paddingHorizontal: 18,
  },

  /* CONFIRMAR */
  confirmarButton: {
    marginHorizontal: 18,
    height: 70,
    borderRadius: 12,
    backgroundColor: "#e9b958",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  confirmarText: {
    color: "#111111",
    fontSize: 16,
    fontWeight: "800",
  },

  /* SEGURANÇA */
  seguranca: {
    textAlign: "center",
    marginTop: 20,
    color: "#a5a5a5",
    fontSize: 14,
  },
});