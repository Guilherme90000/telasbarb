import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Faturamento() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Título */}
      <Text style={styles.titulo}>FATURAMENTO</Text>

      {/* Mês */}
      <Text style={styles.mes}>📅 Agosto 2026</Text>

      {/* Faturamento do mês */}
      <View style={styles.cardPrincipal}>
        <Text style={styles.cardTitulo}>
          Faturamento do mês
        </Text>

        <Text style={styles.valorPrincipal}>
          R$ 4.850,00
        </Text>
      </View>

      {/* Cards menores */}
      <View style={styles.linhaCards}>

        {/* Serviços */}
        <View style={styles.cardPequeno}>
          <Text style={styles.cardTitulo}>
            Serviços
          </Text>

          <Text style={styles.valor}>
            R$ 4.200
          </Text>
        </View>

        {/* Clientes */}
        <View style={styles.cardPequeno}>
          <Text style={styles.cardTitulo}>
            Clientes
          </Text>

          <Text style={styles.valor}>
            86
          </Text>
        </View>

      </View>

      {/* Últimos pagamentos */}
      <Text style={styles.subtitulo}>
        Últimos pagamentos
      </Text>

      {/* Pagamento 1 */}
      <View style={styles.pagamento}>
        <Text style={styles.nome}>
          João Silva
        </Text>

        <Text style={styles.preco}>
          R$ 50,00
        </Text>
      </View>

      {/* Pagamento 2 */}
      <View style={styles.pagamento}>
        <Text style={styles.nome}>
          Pedro Santos
        </Text>

        <Text style={styles.preco}>
          R$ 70,00
        </Text>
      </View>

      {/* Pagamento 3 */}
      <View style={styles.pagamento}>
        <Text style={styles.nome}>
          Lucas Alves
        </Text>

        <Text style={styles.preco}>
          R$ 45,00
        </Text>
      </View>

      {/* Botão */}
      <Pressable
        style={styles.botao}
        onPress={() => {
          console.log("Registrar faturamento");
        }}
      >
        <Text style={styles.textoBotao}>
          + Registrar faturamento
        </Text>
      </Pressable>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000",
    padding: 20,
    paddingTop: 50,
  },

  titulo: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  mes: {
    color: "#aaa",
    fontSize: 16,
    marginBottom: 25,
    textAlign: "center",
  },

  cardPrincipal: {
    backgroundColor: "#111",
    borderRadius: 18,
    padding: 25,
    borderWidth: 1,
    borderColor: "#292929",
    marginBottom: 15,
  },

  cardTitulo: {
    color: "#aaa",
    fontSize: 15,
    marginBottom: 8,
  },

  valorPrincipal: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  linhaCards: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 30,
  },

  cardPequeno: {
    flex: 1,
    backgroundColor: "#111",
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: "#292929",
  },

  valor: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  subtitulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  pagamento: {
    backgroundColor: "#111",
    borderRadius: 14,
    padding: 18,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#222",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  nome: {
    color: "#fff",
    fontSize: 16,
  },

  preco: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  botao: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    marginTop: 20,
    alignItems: "center",
    marginBottom: 20,
  },

  textoBotao: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});