const createErrorComponent = () => {
  const container = document.createElement('div');
  const pokemonError = document.createElement('img');
  pokemonError.classList.add('pokemon-error');

  pokemonError.src = '../assets/noPokemon.png';

  container.append(pokemonError);

  return container;
};

export default createErrorComponent;
