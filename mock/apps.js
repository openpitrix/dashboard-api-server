const faker = require('faker');
const utils = require('../utils');
const { totalCount } = require('../config');

module.exports = (function() {
  const apps = [];

  const demoNames = ['Kubernets', 'RandonDB', 'PostgreSQL', 'Spark', 'MySQL Plus', 'Redis'];

  for (let i = 0; i < totalCount; i++) {
    apps.push({
      app_id: utils.genResourceId('app'),
      name: faker.random.arrayElement(demoNames),
      repo_id: utils.genResourceId('repo'),
      description: faker.lorem.paragraph(),
      status: faker.random.arrayElement(['active', 'pending', 'inacitve']),
      home: faker.internet.url(),
      icon: faker.internet.avatar(),
      // add three images to screenshots
      screenshots: faker.fake('{{image.imageUrl}},{{image.imageUrl}},{{image.imageUrl}}'),
      maintainers: faker.name.findName(),
      sources: faker.internet.url(),
      readme: faker.internet.url(),
      chart_name: faker.random.words(),
      owner: faker.random.arrayElement(['system']),
      create_time: faker.date.past(),
      status_time: faker.date.recent(),
      update_time: faker.date.recent()
    });
  }

  return apps;
})();
