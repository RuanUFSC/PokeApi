import './App.css'
import { useState } from 'react'

function PokemonSearch() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const envioFormulario = async (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      setPokemonData(data)
    })
  };

  return (
    <div>
      <form onSubmit={envioFormulario}>
        <input
          type="text"
          value={pokemonName}
          onChange={(event) => setPokemonName(event.target.value)}
          placeholder="Digite um nome ou número de Pokemon"
        />
        <button type="submit">Consultar</button>
      </form>
       {
        <div>
          <h2>{pokemonData?.name}</h2>
          <img src={pokemonData?.sprites.front_default} alt={pokemonData?.name} />
          <p>Altura: {pokemonData?.height}</p>
          <p>Peso: {pokemonData?.weight}</p>
        </div>
      }
    </div>
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
