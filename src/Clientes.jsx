import React from "react";
import "./Cliente.css";

export default function Cliente({ clientes = [] }) {
  return (
    <div className="container-clientes">
      <div className="header-clientes">
        <h1>Clientes</h1>
        <button className="menu-button">☰</button>
      </div>

      <div className="lista-clientes">
        {clientes.map((c) => (
          <div className="cliente-card" key={c.id}>
            <div className="cliente-info">
              <span className="label-nome">Nome</span>
              <span className="nome-cliente">{c.nome}</span>
            </div>

            <span
              className={`status-badge ${
                c.status === "Concluído" ? "status-concluido" : "status-agendado"
              }`}
            >
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}