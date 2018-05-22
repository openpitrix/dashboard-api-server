const faker = require('faker');
const resouceUtil = require('./resource');

module.exports = {
  /**
   *
   * @param type
   * @param length
   * @param resource | inject suitable for testing
   * @returns {string}
   */
  genResourceId: function(type, length, resource) {
    let default_size = 8;
    if (arguments.length === 2 && typeof arguments[1] === 'object') {
      length = default_size;
      resource = arguments[1];
    }
    length = length || default_size;
    resource = resource || resouceUtil;

    if (!type || typeof type !== 'string') {
      throw Error('type should be string');
    }
    let randomStr = faker.random
      .uuid()
      .replace(/-/g, '')
      .substr(0, length);

    return resource.getPrefix(type) + randomStr;
  }
};
