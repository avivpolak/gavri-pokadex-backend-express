const express = require("express");
const pokemonRouter = require("./routers/pokemonRouter");
const userRouter = require("./routers/userRouter");
const { errorHandler, ValidationError } = require("./middleware/errorHandler");
const userHandler = require("./middleware/userHandler");
const path = require("path");
const cors = require("cors");

const port = 5000;
let userName = null;

const app = express();
app.use(cors());
app.use("/", express.static(path.join(__dirname, "./dist")));

app.use("/pokemon", pokemonRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.send("hello");
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
