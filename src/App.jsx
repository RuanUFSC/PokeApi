import './App.css'
import { useState } from 'react'

function App() {
  const [nome, setNome] = useState('André')
  const [times, setTimes] = useState([])
  const [filme, setFilme] = useState({ titulo: 'Vingadores', anoLancamento: 2019 })
  const nomes = ['João', 'José', 'Josnei', 'Jorge', 'Junior']

  const trocarDeNome = () => {
    setNome('Richarlison')
  }

  const trocarDeFilme = () => {
    setFilme({titulo: 'Cavaleiros do Zodíaco', anoLancamento: 2002 })
  }

  return (
    <div>
      <h1>Trocar de nome</h1>
      <h3>{nome}</h3>
      <button onClick={trocarDeNome}>Clique aqui</button>
      <h1>{filme.titulo}</h1>
      <h3>{filme.anoLancamento}</h3>
      <button onClick={trocarDeFilme}>Clique aqui</button>
      <h2>Lista de nomes</h2>
      <ul>
        {nomes.map((nome, index) => {
          return <li key={index}>Nome {index+1}: {nome}</li>
        })}
      </ul>
    </div>
  )
}

export default App
