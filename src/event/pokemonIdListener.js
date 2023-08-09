import dom from "../data/dom.js";
import pokemonDataHandler from "../handler/pokemonDataHandler.js";

const pokemonIdListener = () => {
  dom.btnSearch.addEventListener("input", (e) => {
    pokemonDataHandler(e);
  });
};

export default pokemonIdListener;
