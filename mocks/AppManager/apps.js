const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

module.exports = (function() {
  const apps = [];
  const demoNames = ['Kubernets', 'RandonDB', 'PostgreSQL', 'Spark', 'MySQL Plus', 'Redis'];
  const status = ['active', 'stopped', 'ceased', 'pending', 'suspended', 'deleted'];
  const categories = [
    // 'top',
    // 'essential',
    'software',
    'business',
    'develop',
    'operation',
    'security',
    'analysis'
  ];
  const owners = ['system', 'Samantha', 'Ethan', 'Simon'];

  for (let i = 0; i < totalCount; i++) {
    apps.push({
      app_id: gen.genResourceId('apps'),
      name: faker.random.arrayElement(demoNames),
      repo_id: gen.genResourceId('repos'),
      description: faker.lorem.paragraph(),
      status: faker.random.arrayElement(status),
      home: faker.internet.url(),
      icon: faker.internet.avatar(),
      // add three images to screenshots
      screenshots: faker.fake('{{image.imageUrl}},{{image.imageUrl}},{{image.imageUrl}}'),
      maintainers: faker.name.findName(),
      sources: faker.internet.url(),
      readme: faker.internet.url(),
      chart_name: faker.random.words(),
      category: faker.random.arrayElement(categories),
      // tags: [],
      owner: faker.random.arrayElement(owners),
      create_time: faker.date.past(),
      status_time: faker.date.recent(),
      update_time: faker.date.recent()
    });
  }

  return apps;
})();
