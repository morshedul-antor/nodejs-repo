const errorResponse = (req, res, next) => {
  // error functions
  res.success = (data = null) => {
    res.status(200).json(data);
  };

  res.created = (data = null) => {
    res.status(201).json(data);
  };

  res.accepted = (data = null) => {
    res.status(202).json(data);
  };

  res.error = (
    message = "Something went wrong!",
    statusCode = 500,
    type = "ServerError"
  ) => {
    res.status(statusCode).json({
      exception: type,
      error: message,
    });
  };

  res.badRequest = (message = "Unauthorized!") => {
    res.error(message, 401, "Unauthorized");
  };

  res.badRequest = (message = "Bad Request!") => {
    res.error(message, 400, "BadRequest");
  };

  res.notFound = (message = "Not Found!") => {
    res.error(message, 404, "NotFound");
  };

  res.methodNotAllowed = () => {
    res.error("Method not allowed!", 405, "NotAllowed");
  };

  next();
};

module.exports = errorResponse;
