import './App.css'
import { useState } from 'react'

function PokemonSearch() {

  const [pokemons, setPokemons] = useState([]);

  async function fetchPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await response.json();
    setPokemons(data.results);
    console.log(data.results);
  }

  fetchPokemons();


  return (
    <>
        {pokemons.map(pokemon => (
            <div key={pokemon?.name}>
              <h4>{pokemon?.name}</h4>
            </div>
        ))}
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
