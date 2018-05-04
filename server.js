const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');
const methodOverride = require('method-override');
const server = jsonServer.create();
const bodyParser = jsonServer.bodyParser;

const { gen, logger, resource } = require('./utils');

const config = require('./config');
const db = require('./mocks/db');
const rewrites = require('./rewrites.json');

const logMiddleware = require('./middlewares/log');
const customActionsMiddleware = require('./middlewares/custom-actions');
const idKeyMiddleware = require('./middlewares/id-key');
const filterBodyMiddleWare = require('./middlewares/filter-body');

const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

// transform primary keys
const sharedVals = {
  lastResourceName: '',
  lastIdKey: ''
};

server.use(methodOverride());
server.use(bodyParser);
server.use(middlewares);
server.use(jsonServer.rewriter(rewrites));

// snapshots
server.get('/snapshots', (req, res) => {
  let write = req.query.write;
  let db = router.db.getState();
  if (write) {
    let filepath = path.join(__dirname, 'snapshots/db-' + Date.now() + '.json');
    fs.writeFileSync(filepath, JSON.stringify(db, null, 2));
    logger.info(`saved snapshot: ${filepath}`);
  }
  res.jsonp(db);
});

// add custom middlewares
server.use(logMiddleware);
server.use(idKeyMiddleware(sharedVals));
server.use(filterBodyMiddleWare(sharedVals));
server.use(customActionsMiddleware(router, sharedVals));

// using json-server's router
server.use(router);

// override lodash __id mixin method, to generate custom primaryKey for each db collection
router.db._.mixin({
  __id: function() {
    return sharedVals.lastIdKey || 'id';
  },
  createId: function(coll) {
    // in lodash scope, _ = this
    // todo: not check collision
    return gen.genResourceId(sharedVals.lastResourceName);
  }
});

// proxy router render, decorate output data
// req url: /:versionId/resourceId/:endpoint
router.render = (req, res) => {
  let resData = res.locals.data;
  let resName = sharedVals.lastResourceName;

  if (req.method === 'GET' && !req.params.id) {
    resName = resource.getResourceSetName(resName);
    let data = { total_count: resData.length };
    data[resName] = resData;
    res.jsonp(data);
  } else {
    let idKey = sharedVals.lastIdKey;

    if (!idKey) {
      res.status(404).end({});
    }

    // handle delete method
    // DELETE /resource
    if (req.method === 'DELETE' && !req.params.id) {
      req.params.id = req.body[idKey];

      let resource = router.db
        .get(resName)
        .removeById(req.params.id)
        .value();

      // Remove dependents documents
      // var removable = db._.getRemovable(db.getState(), opts);
      // removable.forEach(function (item) {
      //   db.get(item.name).removeById(item.id).value();
      // });

      resData = resource || {};
    }

    res.jsonp(resData);
  }
};

const PORT = process.env.PORT || config.port || 3000;

server.listen(PORT, () => {
  logger.info(`api server listening at ${PORT}`);
});
