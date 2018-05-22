module.exports = {
  apps: require('./AppManager/apps'),
  app_versions: require('./AppManager/app_versions'),
  clusters: require('./ClusterManager/clusters'),
  cluster_activities: require('./ClusterManager/cluster_activities'),
  repos: require('./RepoManager/repos'),
  runtimes: require('./RuntimeManager/runtimes'),
  users: require('./UserManager/users'),
  roles: require('./UserManager/roles'),
  organizations: require('./UserManager/organizations'),
  groups: require('./UserManager/groups'),
  authorities: require('./UserManager/authorities'),
  categories: require('./CategoriesManager/categories'),
  statistics: require('./Statistics/statistics')
};
