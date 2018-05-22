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
    if (!(typeof req === 'object' && typeof req.path === 'string')) {
      throw Error(`${req} should be express request object`);
    }
    return req.path.split('/')[0];
  }
};
