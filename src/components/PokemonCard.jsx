import PropTypes from 'prop-types'

    const PokemonCard = (props) =>{
      
      PokemonCard.PropTypes = {
        props: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc:PropTypes.string.isRequired
        }).isRequip
        }
        // const pokemon = pokemon[0];
        const {pokemon} = props
    return (
      <>
        <figure>
          {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>????</p>}
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      </>
        );
        
  }
 

export default PokemonCard