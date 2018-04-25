const faker = require('faker');

const resourcePrefix = {
  app: 'app-',
  repo: 'repo-'
};

module.exports = {
  genResourceId: function(type, count) {
    count = count || 8;
    let randomStr = faker.random
      .uuid()
      .replace(/-/g, '')
      .substr(0, count);
    return resourcePrefix[type] + randomStr;
  }
};
