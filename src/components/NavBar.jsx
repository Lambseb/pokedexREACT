function NavBar({ pokeUse, poke, clickU, clickD }) {
  return (
    <>
      {pokeUse > 0 ? <button onClick={clickD}>Précédent</button> : false}
      {pokeUse < poke.length - 1 ? (
        <button onClick={clickU}>Suivant</button>
      ) : (
        false
      )}
    </>
  );
}

export default NavBar;
