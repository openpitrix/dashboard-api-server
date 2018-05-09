const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

const totalCount2 = 10;

module.exports = (function() {
  const resutlArr = [];

  const nameArray = ['Redis Cloud', 'RandonDB', 'PostgreSQL', 'Spark', 'MySQL Plus', 'Redis'];
  const roleArray = ['Administrator', 'Developer', 'Normal User'];
  const statusArray = ['stopped', 'suspended', 'pending', 'active', 'ceased', 'deleted'];
  for (let i = 0; i < totalCount2; i++) {
    resutlArr.push({
      id: gen.genResourceId('users'),
      username: faker.random.arrayElement(nameArray),
      description: faker.lorem.paragraph(),
      status: faker.random.arrayElement(statusArray),
      email: 'test@test.com',
      role: faker.random.arrayElement(roleArray),
      created: faker.date.past(),
      last_modified: faker.date.recent()
    });
  }

  return resutlArr;
})();
