const faker = require('faker');
const resource = require('./resource');

module.exports = {
  genResourceId: function(type, length) {
    length = length || 8;
    let randomStr = faker.random
      .uuid()
      .replace(/-/g, '')
      .substr(0, length);

    return resource.getPrefix(type) + randomStr;
  }
};
