const createPokemonComponents = (data) => {
  const container = document.createElement("div");
  const pokemonImg = document.createElement("img");
  pokemonImg.classList.add("pokemon-img");
  const title = document.createElement("h4");
  const description = document.createElement("p");

  pokemonImg.src = data.sprites.other.home.front_default;
  title.innerText = data.species.name;
  description.innerText = data.moves[0].move.name;
  console.log(description);

  container.append(title, pokemonImg, description);

  return container;
};

export default createPokemonComponents;
