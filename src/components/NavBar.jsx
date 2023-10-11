function NavBar(useNav) {

  const clickerUp = () => {
    useNav.pokeSet(useNav.pokeUse + 1);
  };
  const clickerDown = () => {
    useNav.pokeSet(useNav.pokeUse - 1);
  };
  return (
    <>
      {useNav.pokeUse > 0 ? (
        <button onClick={clickerDown}>Précédent</button>
      ) : (
        false
      )}
      {useNav.pokeUse < useNav.poke.length - 1 ? (
        <button onClick={clickerUp}>Suivant</button>
      ) : (
        false
      )}
    </>
  );
}

export default NavBar;
