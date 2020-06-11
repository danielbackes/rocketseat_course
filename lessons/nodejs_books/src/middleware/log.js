module.exports = (request, response, next) => {
  const { method, url } = request;

  const label = `[${method.toUpperCase()}] ${url}`;

  console.time(label);

  next();

  console.timeEnd(label);
};