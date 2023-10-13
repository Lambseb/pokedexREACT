function NavBar({ pokemonIndex, pokemonList, setPokemonIndex, pokemon }) {
  //  pokemonCard affiche la carte avec des balises text et image
  return (
    <ul>
      {pokemonList.map((pokeName, index) => (
        <>
          <li key={index}>
            <button onClick={() => setPokemonIndex(pokemonList.indexOf(pokeName))}>
              {pokeName.name}
            </button>
            {pokemonIndex === 3? alert("Pika Pikachuu"): ""}
          </li>
        </>
      ))}
    </ul>
  );
}

export default NavBar;
