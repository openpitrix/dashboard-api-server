const express = require('express');
const logger = require('../utils/logger');

const validActions = [
  'add_nodes',
  'cease',
  'create',
  'delete',
  'delete_nodes',
  'recover',
  'resize',
  'rollback',
  'start',
  'stop',
  'update_env',
  'upgrade'
];

/**
 *
 * @param externalRouter | json-server router
 * @param sharedVals
 * @returns {*}
 */
module.exports = (externalRouter, sharedVals) => {
  const router = express.Router();
  const db = externalRouter.db;

  router.post('/clusters/:action', (req, res) => {
    let action = req.params.action;
    if (validActions.indexOf(action) < 0) {
      res.status(401).send('bad request');
    }

    logger.info(req.path, req.body);
    res.send(`call ${action}`);
  });

  router.patch('/:resource', (req, res) => {
    const resName = sharedVals.lastResourceName;
    const idKey = sharedVals.lastIdKey;

    req.params.id = req.body[idKey];
    delete req.body[idKey];

    if (req.params.resource === resName) {
      let id = req.params.id;
      let chain = db.get(resName);

      chain =
        req.method === 'PATCH' ? chain.updateById(id, req.body) : chain.replaceById(id, req.body);
      let resData = chain.value() || {};

      res.jsonp(resData);
      return;
    }

    res.status(401).send('bad request');
  });

  return router;
};
