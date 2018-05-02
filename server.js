const jsonServer = require('json-server');
const server = jsonServer.create();

const config = require('./config');
const utils = require('./utils');
const db = require('./db');

const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);

// server.use(require('./middleware/log'));

server.use(router);

// proxy router render, decorate output data
router.render = (req, res) => {
  if (req.method === 'GET' && !req.params.id) {
    let resData = res.locals.data;
    let resName = req.path.startsWith('/') ? req.path.substr(1) : req.path;
    resName = utils.singularMap[resName] + '_set';
    let data = { total_count: resData.length };
    data[resName] = resData;
    res.jsonp(data);
  } else {
    res.jsonp(res.locals.data);
  }
};

server.use(jsonServer.rewriter('./routes.json'));

const PORT = process.env.PORT || config.port || 3000;

server.listen(PORT, () => {
  console.log(`openpitrix REST api server listening at ${PORT}`);
});
