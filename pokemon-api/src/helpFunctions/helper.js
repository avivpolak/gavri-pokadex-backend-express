const fs = require("fs");
const path = require("path");

function getUserPokemonList(userDirPath) {
  const userPokemonList = [];
  console.log(userDirPath);
  const userPokemonsPaths = fs
    .readdirSync(userDirPath)
    .map((file) => path.join(userDirPath, file));
  console.log("test");

  for (let pokemonPath of userPokemonsPaths) {
    const pokemon = JSON.parse(fs.readFileSync(pokemonPath));
    userPokemonList.push(pokemon);
  }

  return userPokemonList;
}

module.exports = {
  getUserPokemonList,
};
