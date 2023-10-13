import PropTypes from "prop-types";

function PokemonCard(props) {
  if (props.pokemon.imgSrc != null) {
    return (
      <figure >
        <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
        <figcaption>{props.pokemon.name}</figcaption>
      </figure>
    );
  } else {
    <p>???</p>;
    return (
      <figure>
        <p>???</p>
        <figcaption>{props.pokemon.name}</figcaption>
      </figure>
    );
  }
}
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
