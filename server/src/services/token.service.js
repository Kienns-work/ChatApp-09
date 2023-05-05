const jwt = require("jsonwebtoken");
const moment = require("moment");
const { Token } = require("../models");
const { tokenTypes } = require("../config/tokens");
const { userService } = require(".");
const ApiError = require("../utils/ApiError");
const { jwt: jwtConfig } = require("../config/config");

/**
 * Generate token
 * @param {ObjectId} userId
 * @param {Moment} expires
 * @param {string} type
 * @param {string} [secret]
 * @returns {string}
 */
const generateToken = (userId, expires, type, secret) => {
  const payload = {
    sub: userId,
    iat: moment().unix(),
    exp: expires.unix(),
    type,
  };
  return jwt.sign(payload, secret);
};

/**
 * Save a token
 * @param {string} token
 * @returns {Promise<Token>}
 */
const saveToken = async (token) => {
  const tokenDoc = await Token.create({
    token,
  });
  return tokenDoc;
};

/**
 * Verify token and return token doc (or throw an error if it is not valid)
 * @param {string} token
 * @returns {Promise<Token>}
 */
const verifyToken = async (token, secret) => {
  const payload = jwt.verify(token, secret);
  const user = await userService.getUserById(payload.sub);
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Can not update user");
  }

  return payload;
};

/**
 * Generate auth tokens
 * @param {User} user
 * @returns {Promise<Object>}
 */
const generateAuthTokens = async (user) => {
  const accessTokenExpires = moment().add(
    jwtConfig.accessExpirationMinutes,
    "minutes"
  );
  const accessToken = generateToken(
    user.id,
    accessTokenExpires,
    tokenTypes.ACCESS,
    jwtConfig.secret
  );

  const refreshTokenExpires = moment().add(
    jwtConfig.refreshExpirationDays,
    "days"
  );
  const refreshToken = generateToken(
    user.id,
    refreshTokenExpires,
    tokenTypes.REFRESH,
    jwtConfig.secret
  );

  await saveToken(refreshToken);

  return {
    access_token: accessToken,
    refresh_token: refreshToken,
  };
};

const checkRefreshToken = async (refreshToken) => {
  const refreshTokenDoc = await Token.findOne({ token: refreshToken });
  if (!refreshTokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, "Refresh token not found");
  }

  const payload = await verifyToken(refreshToken, jwtConfig.secret);
  if (payload.exp < Date.now() / 1000) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Token expired");
  }
  console.log(payload);
  return payload.sub;
};

module.exports = {
  generateToken,
  saveToken,
  verifyToken,
  generateAuthTokens,
  checkRefreshToken,
};
