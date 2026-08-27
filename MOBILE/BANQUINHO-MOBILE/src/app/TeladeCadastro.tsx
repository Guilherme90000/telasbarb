import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";

type Cliente = {
  id: number;
  nome: string;
  status: string;
};

type TelaCadastroProps = {
  onCadastrar: (novoCliente: Cliente) => void;
};

export default function TelaCadastro({
  onCadastrar,
}: TelaCadastroProps) {
  const [nome, setNome] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [cpfResponsavel, setCPFResponsavel] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = () => {
    if (senha !== confirmarSenha) {
      Alert.alert("Atenção", "As senhas não coincidem!");
      return;
    }

    const novoCliente: Cliente = {
      id: Date.now(),
      nome: nome,
      status: "Concluído",
    };

    onCadastrar(novoCliente);

    // Limpa o formulário depois de cadastrar
    setNome("");
    setResponsavel("");
    setCPFResponsavel("");
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
    setTelefone("");

    Alert.alert("Sucesso", "Cliente cadastrado com sucesso!");
  };

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>

        {/* LOGO */}
        <View style={styles.avatarWrap}>
          <View style={styles.avatar}>
            <Image
              source={require("../../assets/Logo.png")}
              style={styles.logo}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* TÍTULO */}
        <Text style={styles.title}>
          Cadastro
        </Text>

        <Text style={styles.subtitle}>
          Crie sua conta preenchendo os campos abaixo
        </Text>

        {/* NOME COMPLETO */}
        <View style={styles.field}>
          <Text style={styles.label}>
            Nome Completo
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#777"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        {/* RESPONSÁVEL */}
        <View style={styles.field}>
          <Text style={styles.label}>
            Nome do Responsável
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o nome do responsável"
            placeholderTextColor="#777"
            value={responsavel}
            onChangeText={setResponsavel}
          />
        </View>

        {/* CPF */}
        <View style={styles.field}>
          <Text style={styles.label}>
            CPF do Responsável
          </Text>

          <TextInput
            style={styles.input}
            placeholder="000.000.000-00"
            placeholderTextColor="#777"
            value={cpfResponsavel}
            onChangeText={setCPFResponsavel}
            keyboardType="numeric"
          />
        </View>

        {/* TELEFONE */}
        <View style={styles.field}>
          <Text style={styles.label}>
            Telefone
          </Text>

          <TextInput
            style={styles.input}
            placeholder="(00) 00000-0000"
            placeholderTextColor="#777"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />
        </View>

        {/* E-MAIL */}
        <View style={styles.field}>
          <Text style={styles.label}>
            E-mail
          </Text>

          <TextInput
            style={styles.input}
            placeholder="exemplo@email.com"
            placeholderTextColor="#777"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* SENHA */}
        <View style={styles.field}>
          <Text style={styles.label}>
            Senha
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#777"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
        </View>

        {/* CONFIRMAR SENHA */}
        <View style={styles.field}>
          <Text style={styles.label}>
            Confirmar Senha
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            placeholderTextColor="#777"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
          />
        </View>

        {/* BOTÃO */}
        <Pressable
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>
            Cadastrar
          </Text>
        </Pressable>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  // FUNDO DA PÁGINA
  page: {
    flex: 1,
    backgroundColor: "#000000",
  },

  // CONTAINER
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    paddingBottom: 40,
  },

  // CARD
  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#0f0f0f",
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: "#1f1f1f",
  },

  // POSIÇÃO DA LOGO
  avatarWrap: {
    alignItems: "center",
    marginBottom: 15,
  },

  // CÍRCULO DA LOGO
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#181818",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#e9b958",

    // Faz a logo respeitar o formato circular
    overflow: "hidden",
  },

  // LOGO
  logo: {
    width: 115,
    height: 115,
  },

  // TÍTULO
  title: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },

  // SUBTÍTULO
  subtitle: {
    color: "#999999",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 28,
  },

  // CAMPO
  field: {
    marginBottom: 17,
  },

  // LABEL
  label: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  // INPUT
  input: {
    width: "100%",
    height: 52,
    backgroundColor: "#181818",
    borderWidth: 1,
    borderColor: "#2d2d2d",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#ffffff",
    fontSize: 15,
  },

  // BOTÃO
  button: {
    height: 54,
    backgroundColor: "#e9b958",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },

  // TEXTO DO BOTÃO
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "700",
  },
});