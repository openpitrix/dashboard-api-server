const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

module.exports = (function() {
  const users = [];
  const names = ['Redis Cloud', 'RandonDB', 'PostgreSQL', 'Spark', 'MySQL Plus', 'Redis'];
  const roles = ['Administrator', 'Developer', 'Normal User'];
  const status = ['stopped', 'suspended', 'pending', 'active', 'ceased', 'deleted'];

  for (let i = 0; i < totalCount; i++) {
    users.push({
      uset_id: gen.genResourceId('users'),
      username: faker.random.arrayElement(names),
      description: faker.lorem.paragraph(),
      status: faker.random.arrayElement(status),
      email: faker.internet.email(),
      role: faker.random.arrayElement(roles),
      create_time: faker.date.past(),
      status_time: faker.date.recent(),
      update_time: faker.date.recent()
    });
  }

  return users;
})();
