const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const httpStatus = require('http-status');
const config = require('./config/config');
const morgan = require('./config/morgan');
// const { jwtStrategy } = require('./config/passport');
const { authLimiter } = require('./middlewares/rateLimiter');
const routes = require('./routes');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

app.use(express.json());
app.use(cors());
app.options('*', cors());

// if (config.env === 'production') {
//   app.use('/v1/auth', authLimiter);
// }

// v1 api routes
app.use('/api', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
