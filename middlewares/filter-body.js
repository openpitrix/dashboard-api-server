const resource = require('../utils/resource');
const { isEmpty } = require('lodash');

module.exports = sharedVals => {
  return (req, res, next) => {
    let idKey = sharedVals.lastIdKey;

    // strip extra body params in POST method
    if (req.method === 'POST' && isEmpty(req.params)) {
      if (isEmpty(req.body)) {
        res.status(401).send('body is required');
        return;
      }

      // todo: validate body fields

      // strip idKey in body
      if (req.body[idKey]) {
        delete req.body[idKey];
      }
    }

    if (req.method === 'PATCH' && isEmpty(req.params)) {
      if (isEmpty(req.body)) {
        res.status(401).send('body is required');
        return;
      }

      if (!req.body[idKey]) {
        res.status(401).send(`${idKey} is required`);
        return;
      }

      // todo: only choose accepted fields
    }

    next();
  };
};
