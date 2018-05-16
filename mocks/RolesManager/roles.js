const faker = require('faker');
const gen = require('../../utils/gen');

module.exports = (function() {
  const roles = [];
  const nameArray = [
    'Redis Cloud',
    'Software Infrastructure',
    'PostgreSQL',
    'Software Infrastructure'
  ];
  const images = [
    [
      faker.internet.avatar(),
      faker.internet.avatar(),
      faker.internet.avatar(),
      faker.internet.avatar(),
      faker.internet.avatar()
    ],
    [faker.internet.avatar(), faker.internet.avatar(), faker.internet.avatar()],
    [faker.internet.avatar(), faker.internet.avatar()],
    [
      faker.internet.avatar(),
      faker.internet.avatar(),
      faker.internet.avatar(),
      faker.internet.avatar(),
      faker.internet.avatar(),
      faker.internet.avatar(),
      faker.internet.avatar()
    ]
  ];
  for (let i = 0; i < 3; i++) {
    roles.push({
      id: gen.genResourceId('roles'),
      name: faker.random.arrayElement(nameArray),
      description: faker.lorem.paragraph(),
      idNo: 'idNo_' + gen.genResourceId('roles'),
      images: faker.random.arrayElement(images),
      created: faker.date.past(),
      last_modified: faker.date.recent()
    });
  }

  return roles;
})();
