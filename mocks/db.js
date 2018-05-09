module.exports = {
  apps: require('./AppManager/apps'),
  app_versions: require('./AppManager/app_versions'),
  clusters: require('./ClusterManager/clusters'),
  repos: require('./RepoManager/repos'),
  runtimes: require('./RuntimeManager/runtimes'),
  users: require('./UserManager/users'),
  roles: require('./RolesManager/roles'),
  categories: require('./CategoriesManager/categories')
};
