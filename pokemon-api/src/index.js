const express = require("express");
const pokemonRouter = require("./routers/pokemonRouter");
const userRouter = require("./routers/userRouter");
const { errorHandler, ValidationError } = require("./middleware/errorHandler");
const userHandler = require("./middleware/userHandler");
const cors = require("cors");

const port = 5000;
let userName = null;

const app = express();
app.use(cors());

app.use("/pokemon", pokemonRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  console.log("testtttt");
  res.send("hello");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
