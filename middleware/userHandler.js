const { ValidationError } = require("./errorHandler");

const userHandler = (user) => {
  return (req, res, next) => {
    if (req.get("username")) {
      user.name = req.get("username");
      next();
    } else {
      throw new ValidationError("no username header");
    }
  };
};

module.exports = userHandler;
