const express = require("express");
const pokeApiFormating = require("../formating/pokeApiFormating");
const Pokedex = require("pokedex-promise-v2");
const fs = require("fs");
const path = require("path");
const checker = require("../helpFunctions/checker");
const helper = require("../helpFunctions/helper");

const P = new Pokedex();
const pokemonRouter = express.Router();

pokemonRouter.use(express.json());

pokemonRouter.get("/get/:id", async (req, res) => {
  const { id } = req.params;
  const pokemon = await getPokemonByNameAndFormat(id);
  res.json(pokemon);
});

pokemonRouter.get("/query", async (req, res) => {
  const name = req.query.name;
  console.log(name);
  const pokemon = await getPokemonByNameAndFormat(name);
  res.json(pokemon);
});

pokemonRouter.put("/catch/:id", (req, res) => {
  const pokemonId = req.params.id;
  const userName = req.get("username");
  const userDirPath = path.resolve(__dirname, `../users/${userName}`);
  const finalPokemonPath = path.join(userDirPath, `/${pokemonId}.json`);

  if (checker.checkIfPokemonAlreadyCaught(finalPokemonPath)) {
    //   later will handle in error middlewere
    throw new Error("pokemon already caught");
  }
  if (!fs.existsSync(userDirPath)) {
    fs.mkdirSync(userDirPath);
  }
  fs.writeFileSync(finalPokemonPath, JSON.stringify(req.body), "utf-8");
  res.json(`pokemon ${pokemonId} caught for ${userName}`);
});

pokemonRouter.delete("/release/:id", (req, res) => {
  const pokemonId = req.params.id;
  const userName = req.get("username");
  const pokemonPath = path.resolve(
    __dirname,
    `../users/${userName}/${pokemonId}.json`
  );

  if (checker.checkIfPokemonAlreadyCaught(pokemonPath)) {
    fs.unlinkSync(pokemonPath);
    res.json(`pokemon ${pokemonId} released for ${userName}`);
  } else {
    //   will handle in error middlewere
    throw new Error("pokemon to remove does not exists");
  }
});

pokemonRouter.get("/", (req, res) => {
  const userName = req.get("username");
  const userDirPath = path.resolve(__dirname, `../users/${userName}`);

  if (!checker.checkIfUserExists(userDirPath)) {
    //   will handle in error middlewere
    throw new Error("user does not exists");
  }

  const userPokemonList = helper.getUserPokemonList(userDirPath);
  res.json(userPokemonList);
});

async function getPokemonByNameAndFormat(name) {
  let pokemon = await P.getPokemonByName(name);
  pokemon = pokeApiFormating.formatGetPokemonByName(pokemon);
  return pokemon;
}

module.exports = pokemonRouter;
