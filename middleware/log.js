module.exports = (req, res, next) => {
  console.log('req.url', req.url);
  console.log('req.query', req.query);
  console.log('req.params', req.params);
  next();
};
