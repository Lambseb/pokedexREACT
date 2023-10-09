
    const PokemonCard = () =>{
        let Pokemon =(<>
                <figcaption>{PokemonList[0].name}</figcaption>
               {PokemonList[0].imgSrc ? <img src={PokemonList[0].imgSrc}></img> : <p>???</p>}

               <figcaption>{PokemonList[1].name}</figcaption>
               {PokemonList[1].imgSrc ? <img src={PokemonList[1].imgSrc}></img> : <p>???</p>}
               </>)
               return Pokemon
    };
    const PokemonList = [
        {
          name: "bulbasaur",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "mew",
        },
      ];
      
export default PokemonCard