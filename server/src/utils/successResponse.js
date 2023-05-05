/**
 * Create a response object with data wrapped or success response
 */
const response = (res, code, message, data = []) =>
  res.status(code).send({
    code,
    message,
    ...(data?.data ? data : { data }),
  });

module.exports = response;
