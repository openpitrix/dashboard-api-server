const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

module.exports = (function() {
  const roles = [];
  const names = ['Administrator', 'Developer', 'Normal User'];

  for (let i = 0; i < totalCount; i++) {
    roles.push({
      role_id: gen.genResourceId('roles', 20),
      name: faker.random.arrayElement(names),
      description: faker.lorem.paragraph(),
      create_time: faker.date.past(),
      status_time: faker.date.recent(),
      update_time: faker.date.recent()
    });
  }

  return roles;
})();
