function errorHandler(error, req, res, next) {
  const errorMessage = error.message;
  console.error(error);

  if (errorMessage === "not found pokemon") {
    res.status(401).json("pokemon not found");
  } else if (
    errorMessage === "pokemon already caught" ||
    errorMessage === "pokemon to remove have not yet been caught"
  ) {
    res.status(403).json("pokemon already caught or hevent yet been caught");
  } else if (error instanceof ValidationError) {
    res.status(401).json("no username header");
  } else {
    res.status(500).json("server error");
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

module.exports = {
  ValidationError,
  errorHandler,
};
