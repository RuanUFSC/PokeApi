import './App.css'
import { useState } from 'react'

function PokemonSearch() {

  const [pikachu, setPikachu] = useState(null);
  const [charizard, setCharizard] = useState(null);

  const buscaPokemons = async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`)
    .then((response) => response.json())
    .then((data) => {
      setPikachu(data)
    })

    fetch(`https://pokeapi.co/api/v2/pokemon/charizard/`)
    .then((response) => response.json())
    .then((data) => {
      setCharizard(data)
    })
  }

  buscaPokemons();

  return (
    <>
      {/* <button onClick={buscaPokemons}>Buscar Pokemons</button> */}
      <div>
          <div>
            <h2>{pikachu?.name}</h2>
            <img src={pikachu?.sprites.front_default} alt={pikachu?.name} />
            <p>Altura: {pikachu?.height}</p>
            <p>Peso: {pikachu?.weight}</p>
          </div>
      </div>
      <div>
          <div>
            <h2>{charizard?.name}</h2>
            <img src={charizard?.sprites.front_default} alt={charizard?.name} />
            <p>Altura: {charizard?.height}</p>
            <p>Peso: {charizard?.weight}</p>
          </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Consulta de Pokemons</h1>
      <PokemonSearch />   
    </>
  )
}

export default App
