const faker = require('faker');

const resourcePrefix = {
  app: 'app-',
  repo: 'repo-'
};

const singularMap = {
  apps: 'app',
  clusters: 'cluster',
  cluster_nodes: 'cluster_node',
  repos: 'repo',
  runtimes: 'runtime'
};

module.exports = {
  genResourceId: function(type, count) {
    count = count || 8;
    let randomStr = faker.random
      .uuid()
      .replace(/-/g, '')
      .substr(0, count);
    return resourcePrefix[type] + randomStr;
  },
  singularMap
};
