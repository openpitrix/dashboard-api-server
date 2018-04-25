const faker = require('faker');
const utils = require('../utils');

const totalCount = 50;

module.exports = (function() {
  const employees = [];

  const demoNames = ['Kubernets', 'RandonDB', 'PostgreSQL', 'Spark', 'MySQL Plus', 'Redis'];

  for (let i = 0; i < totalCount; i++) {
    employees.push({
      id: utils.genResourceId('app'),
      name: faker.random.arrayElement(demoNames),
      description: faker.lorem.paragraph(),
      repo_id: utils.genResourceId('repo'),
      created: faker.date.past(),
      last_modified: faker.date.recent()
    });
  }

  return employees;
})();
