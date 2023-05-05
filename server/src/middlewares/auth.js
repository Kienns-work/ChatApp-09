const jwt = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const { User } = require("../models");
const { jwt: jwtConfig } = require("../config/config");

exports.protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new ApiError(httpStatus.UNAUTHORIZED, 'Token not found')
    );
  }
  const decodedToken = jwt.verify(token, jwtConfig.secret);
  const userId = decodedToken.sub;
  const user = await User.findById(userId);

  if (!user) {
    new ApiError(httpStatus[httpStatus.UNAUTHORIZED], httpStatus.UNAUTHORIZED);
  }

  req.user = userId;
  return next();
};