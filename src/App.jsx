import './App.css'
import { useState } from 'react'

function PokemonInfo({ pokemon }) {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
    </div>
  );
}

function PokemonHistory({ listaDePokemons }) {
  return (
    <div>
      <h2>Últimas pesquisas</h2>
      {listaDePokemons.map((pokemon) => {
        return <img src={pokemon.sprites.front_default} alt={pokemon.name} />          
      })}     
    </div>
  );
}

function PokemonSearch() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  const envioFormulario = async (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      setPokemonData(data)
      let lista = [];
      if(pokemonList.length > 0) {  
        lista = pokemonList;
        lista.unshift(data);
        setPokemonList(lista);
      } else {
        lista.unshift(data);
        setPokemonList(lista);
      }
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
      {/* pokemonData && condiciona a renderização do componente de info a existencia de data */}
      {pokemonData && <PokemonInfo pokemon={pokemonData} />}
      {pokemonList.length > 0 && <PokemonHistory listaDePokemons={pokemonList} />}
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
