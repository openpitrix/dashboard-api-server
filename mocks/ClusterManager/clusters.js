const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

module.exports = (function() {
  const resutlArr = [];

  const demoNames = ['Kubernets', 'RandonDB', 'PostgreSQL', 'Spark', 'MySQL Plus', 'Redis'];
  const demoNames2 = ['stopped', 'suspended', 'pending', 'active', 'ceased', 'deleted'];
  const demoNames3 = ['Samantha', 'Ethan', 'Simon'];
  for (let i = 0; i < totalCount; i++) {
    resutlArr.push({
      id: gen.genResourceId('clusters'),
      name: faker.random.arrayElement(demoNames),
      description: faker.lorem.paragraph(),
      app_id: gen.genResourceId('apps'),
      status: faker.random.arrayElement(demoNames2),
      transition_status: faker.random.arrayElement(demoNames2),
      latest_version: '0.0.2',
      node_count: '3',
      runtime: 'Pek3a Testing',
      user: faker.random.arrayElement(demoNames3),
      created: faker.date.past(),
      last_modified: faker.date.recent()
    });
  }
  return resutlArr;
})();
