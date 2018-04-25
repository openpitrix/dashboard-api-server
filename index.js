// const faker=require('faker');
// faker.locale = 'zh_CN';

const db = {
  apps: require('./mock/apps'),
  clusters: require('./mock/clusters'),
  cluster_nodes: require('./mock/cluster_nodes'),
  repos: require('./mock/repos'),
  runtimes: require('./mock/runtimes')
};

module.exports = function() {
  return db;
};
