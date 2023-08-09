import dom from "../data/dom.js";
import pokemonDataApi from "../api/pokemonDataApi.js";
import createPokemonComponents from "../components/createPokemonComponents.js";
import pokemonIdControl from "../data/data.js";

const pokemonDataHandler = async (e) => {
  try {
    const inputId = e.target.value;
    dom.inputId.innerText = "";
    console.log(inputId);
    const data = await pokemonDataApi(inputId);
    const idPokemon = data.id;
    console.log(idPokemon);
    if ((pokemonIdControl.pokemonId = idPokemon)) {
      const pokemon = createPokemonComponents(data);
      console.log(pokemon);
      dom.root.innerText = "";
      dom.root.append(pokemon);
    }
    pokemonIdControl.pokemonId = idPokemon;
    // console.log(dom);
  } catch (err) {
    console.error(err);
  }
};

export default pokemonDataHandler;
