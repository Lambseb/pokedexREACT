

    const PokemonCard = (props) =>{
        // const pokemon = pokemon[0];
        const {pokemon} = props
    return (
      <>
        <figure>
          {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>????</p>}
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      </>
        )
 };

export default PokemonCard