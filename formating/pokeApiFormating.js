// convert pokeApi format to my format.
function formatGetPokemonByName(pokemonInOldFormat) {
  const pokemonInNewFormat = {};
  pokemonInNewFormat.name = pokemonInOldFormat.name;
  pokemonInNewFormat.height = pokemonInOldFormat.height;
  pokemonInNewFormat.weight = pokemonInOldFormat.weight;
  pokemonInNewFormat.types = pokemonInOldFormat.types.map(
    (obj) => obj.type.name
  );
  pokemonInNewFormat.front_pic = pokemonInOldFormat.sprites.front_default;
  pokemonInNewFormat.back_pic = pokemonInOldFormat.sprites.back_default;
  pokemonInNewFormat.abilities = pokemonInOldFormat.abilities.map(
    (obj) => obj.ability.name
  );
  return pokemonInNewFormat;
}

module.exports = { formatGetPokemonByName };
