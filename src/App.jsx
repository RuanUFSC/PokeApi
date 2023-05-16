import { useState } from 'react'
import './App.css'

function App() {

  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('todas');
  const [novaTarefa, setNovaTarefa] = useState('');

  const mudarFiltro = (event) => {
    setFiltro(event.target.value);
  };

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      const newTarefa = {
        id: tarefas.length + 1,
        title: novaTarefa,
        status: 'pendente'
      };
      setTarefas([...tarefas, newTarefa]);
      setNovaTarefa('');
    }
  };

  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === 'todas') {
      return true;
    } else {
      return tarefa.status === filtro;
    }
  });

  const completarTarefa = (tarefaId) => {
    const updatedTarefas = tarefas.map(tarefa => {
      if (tarefa.id === tarefaId) {
        return { ...tarefa, status: tarefa.status == 'completa' ? 'pendente' : 'completa' };
      }
      return tarefa;
    });
    setTarefas(updatedTarefas);
  };

  return (
    <>
      <h2>Tarefas</h2>
      <h3>Adicione uma tarefa</h3>  
      {/* value vai ajudar a limpar input */}
      <input
        type="text"
        value={novaTarefa}
        onChange={(event) => setNovaTarefa(event.target.value)}
        placeholder="Adicione uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <h3>Lista de tarefas</h3>
      <div>
        Filtro: 
        <select id="filtro" value={filtro} onChange={mudarFiltro}>
          <option value="todas">Todas</option>
          <option value="completa">Completas</option>
          <option value="pendente">Pendentes</option>
        </select>
      </div>

      <ul>
        {tarefasFiltradas.map(tarefa => (
          <li key={tarefa.id}>
              {tarefa.title}            
              {tarefa.status == 'completa' ? 
                (<button onClick={() => completarTarefa(tarefa.id)} style={{ backgroundColor: 'green' }}>
                Completa</button>)
                :                
                (<button onClick={() => completarTarefa(tarefa.id)} style={{ backgroundColor: 'red' }}>
                Pendente</button>)
              }            
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
