const { ValidationError } = require("./errorHandler");

const userHandler = (userName) => {
  return (req, res, next) => {
    if (req.get("username")) {
      userName.name = req.get("username");
      next();
    } else {
      throw new ValidationError("no username header");
    }
  };
};

module.exports = userHandler;
