import React, { useState } from "react";
import "./TelaCadastro.css";
import Logo from "./assets/Logo.png";

function TelaCadastro({ onCadastrar }) {
  const [nome, setNome] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [cpfResponsavel, setCpfResponsavel] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const novoCliente = {
      id: Date.now(),
      nome,
      status: "Concluído",
    };

    onCadastrar(novoCliente);

    setNome("");
    setResponsavel("");
    setCpfResponsavel("");
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
    setTelefone("");
  };

  return (
    <div className="cadastro-page">
      <div className="cadastro-card">

        <div className="avatar-wrap">
          <div className="avatar">
            <img src={Logo} alt="Logo" />
          </div>
        </div>

        <h2 className="cadastro-title">Cadastro</h2>

        <p className="cadastro-subtitle">
          Crie sua conta preenchendo os campos abaixo
        </p>

        <form className="cadastro-form" onSubmit={handleSubmit}>

          <label className="cadastro-label">
            Nome Completo
            <input
              type="text"
              className="cadastro-input"
              placeholder="Digite seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </label>

          <label className="cadastro-label">
            Nome do Responsável
            <input
              type="text"
              className="cadastro-input"
              placeholder="Digite o nome do responsável"
              value={responsavel}
              onChange={(e) => setResponsavel(e.target.value)}
              required
            />
          </label>

          <label className="cadastro-label">
            CPF do Responsável
            <input
              type="text"
              className="cadastro-input"
              placeholder="000.000.000-00"
              value={cpfResponsavel}
              onChange={(e) => setCpfResponsavel(e.target.value)}
              required
            />
          </label>

          <label className="cadastro-label">
            Telefone
            <input
              type="tel"
              className="cadastro-input"
              placeholder="(00) 00000-0000"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </label>

          <label className="cadastro-label">
            E-mail
            <input
              type="email"
              className="cadastro-input"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="cadastro-label">
            Senha
            <input
              type="password"
              className="cadastro-input"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </label>

          <label className="cadastro-label">
            Confirmar Senha
            <input
              type="password"
              className="cadastro-input"
              placeholder="Confirme sua senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="cadastro-button">
            Cadastrar
          </button>

        </form>
      </div>
    </div>
  );
}

export default TelaCadastro;