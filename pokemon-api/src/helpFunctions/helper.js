const fs = require("fs");

function getUserPokemonList(userDirPath) {
  const userPokemonList = [];

  const userPokemonsPaths = fs
    .readdirSync(userDirPath)
    .map((file) => path.join(userDirPath, file));
  git;

  for (let pokemonPath of userPokemonsPaths) {
    const pokemon = JSON.parse(fs.readFileSync(pokemonPath));
    userPokemonList.push(pokemon);
  }

  return userPokemonList;
}

module.exports = {
  getUserPokemonList,
};
