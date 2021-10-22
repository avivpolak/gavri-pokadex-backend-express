const fs = require("fs");

function checkIfPokemonAlreadyCaught(finalPokemonPath) {
  return fs.existsSync(finalPokemonPath);
}

function checkIfUserExists(userPath) {
  return fs.existsSync(userPath);
}

module.exports = {
  checkIfPokemonAlreadyCaught,
  checkIfUserExists,
};
