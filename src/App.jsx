import PokemonCard from "./component/PokemonCard";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./component/NavBar";

function App() {
    useEffect(
      () => {
        alert("hello pokemon trainer :)")
      },
      []
    );
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemonList = [
    {
      id: 1,
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id:2,
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      id:3,
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      id:4,
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      id:5,
      name: "mew",
    },
  ];
  return (
    <div className="button">
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonList={pokemonList}
        pokemon={pokemonList[pokemonIndex]}
      />
    </div>
  );
}

export default App;
