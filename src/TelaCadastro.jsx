import React, { useState } from "react";
import "./TelaCadastro.css";

function TelaCadastro({ onCadastrar }) {
  const [nome, setNome] = useState("");
  const [Responsavel, setResponsavel] = useState("");
  const [CPFResposavel, setCPFResponsavel] = useState("");
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
      nome: nome,
      status: "Concluído",
    };

    onCadastrar(novoCliente);

    // limpa o formulário depois de cadastrar
    setNome("");
    setResponsavel("");
    setCPFResponsavel("");
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width="28"
              height="28"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6 6 0 0 1 12 0v.11c0 .722-.515 1.336-1.225 1.434-1.506.208-3.07.325-4.66.325-1.59 0-3.154-.117-4.66-.325C3.515 20.571 3 19.957 3 19.235Z"
              />
            </svg>
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
              value={Responsavel}
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
              value={CPFResposavel}
              onChange={(e) => setCPFResponsavel(e.target.value)}
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