const resourceMap = require('../resource-map');
const { get } = require('lodash');

module.exports = {
  getPrefix: resName => {
    return get(resourceMap[resName] || {}, 'prefix');
  },
  getResourceSetName: resName => {
    return get(resourceMap[resName] || {}, 'singular') + '_set';
  },
  getPrimaryKey: resName => {
    return get(resourceMap[resName] || {}, 'idKey', 'id');
  },

  /**
   *
   * @param req | express request object
   */
  getResourceNameFromRequest: req => {
    return req.path.startsWith('/') ? req.path.substr(1) : req.path;
  }
};
