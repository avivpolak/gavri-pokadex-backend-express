const express = require("express");
const pokemonRouter = require("./routers/pokemonRouter");

const port = 5000;

const app = express();

app.use("/pokemon", pokemonRouter);

app.get("/", (req, res) => {
  console.log("testtttt");
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
