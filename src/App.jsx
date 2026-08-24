import { useState } from "react";
import "./App.css";
import TelaCadastro from "./TelaCadastro";
import ListaClientes from "./Cliente.jsx";
function App() {
  const [telaAtual, setTelaAtual] = useState('cadastro')
  
  // Estado que guarda a lista compartilhada de clientes
  const [clientes, setClientes] = useState([
    { id: 1, nome: 'Ana Paula Ferreira', status: 'Concluído' }
  ])

  // Função para adicionar um novo cliente e redirecionar
  const adicionarCliente = (novoCliente) => {
    setClientes((listaAnterior) => [...listaAnterior, novoCliente])
    setTelaAtual('clientes') // Redireciona automaticamente para a lista
  }

  return (
    <div className="app-container">
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '10px' }}>
        <button onClick={() => setTelaAtual('cadastro')}>Novo Cadastro</button>
        <button onClick={() => setTelaAtual('clientes')}>Ver Clientes ({clientes.length})</button>
      </nav>

      {telaAtual === 'cadastro' ? (
        <TelaCadastro onCadastrar={adicionarCliente} />
      ) : (
        <ListaClientes clientes={clientes} />
      )}
    </div>
  )
}

export default App