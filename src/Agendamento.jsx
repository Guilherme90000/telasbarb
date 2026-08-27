import { useState } from "react";
import "./Agendamento.css";

function Agendamento() {
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
      alert("Digite seu nome para confirmar o agendamento.");
      return;
    }

    alert(
      `Agendamento confirmado!\n\nNome: ${nome}\nServiço: ${servico}\nData: ${data}\nHorário: ${horario}`
    );
  }

  return (
    <div className="agendamento-page">

      {/* CABEÇALHO */}
      <header className="agendamento-header">
        <button className="voltar-btn">‹</button>

        <h1>
          💈 Agendar Corte
        </h1>

        <button className="perfil-btn">♙</button>
      </header>

      <main className="agendamento-container">

        {/* SERVIÇO */}
        <section className="agendamento-section">
          <h2>
            ✂️ <span>Qual serviço?</span>
          </h2>

          <div className="servicos">
            <button
              className={`servico-btn ${
                servico === "Corte" ? "selecionado" : ""
              }`}
              onClick={() => setServico("Corte")}
            >
              ✂️
              <span>Corte</span>
            </button>

            <button
              className={`servico-btn ${
                servico === "Corte + Barba" ? "selecionado" : ""
              }`}
              onClick={() => setServico("Corte + Barba")}
            >
              🧔
              <span>Corte + Barba</span>
            </button>
          </div>
        </section>

        {/* DATA */}
        <section className="agendamento-section">
          <h2>
            📅 <span>Escolha a data</span>
          </h2>

          <div className="datas">
            {datas.map((item) => (
              <button
                key={item.dia}
                className={`data-btn ${
                  data === item.dia ? "selecionado" : ""
                }`}
                onClick={() => setData(item.dia)}
              >
                <strong>{item.dia}</strong>
                <small>{item.semana}</small>
              </button>
            ))}
          </div>
        </section>

        {/* HORÁRIOS */}
        <section className="agendamento-section">
          <h2>
            🕐 <span>Horários disponíveis</span>
          </h2>

          <div className="horarios">
            {horarios.map((hora) => (
              <button
                key={hora}
                className={`horario-btn ${
                  horario === hora ? "selecionado" : ""
                }`}
                onClick={() => setHorario(hora)}
              >
                {hora}
              </button>
            ))}
          </div>
        </section>

        {/* NOME */}
        <section className="agendamento-section nome-section">
          <h2>
            ♙ <span>Nome</span>
          </h2>

          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </section>

        {/* BOTÃO CONFIRMAR */}
        <button
          className="confirmar-btn"
          onClick={confirmarAgendamento}
        >
          📅
          <span>CONFIRMAR AGENDAMENTO</span>
        </button>

        <p className="seguranca">
          🛡️ Seus dados estão seguros conosco.
        </p>

      </main>
    </div>
  );
}

export default Agendamento;