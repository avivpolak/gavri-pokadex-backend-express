const express = require("express");

const userRouter = new express.Router();

userRouter.get("/info", (req, res) => {
  const userName = req.get("username");

  res.json({ userName });
});

module.exports = userRouter;
