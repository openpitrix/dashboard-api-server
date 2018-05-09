const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

const totalCount2 = 3;

module.exports = (function() {
  const resutlArr = [];
  const nameArray = [
    'Redis Cloud',
    'Software Infrastructure',
    'PostgreSQL',
    'Software Infrastructure'
  ];
  for (let i = 0; i < totalCount2; i++) {
    resutlArr.push({
      id: gen.genResourceId('roles'),
      name: faker.random.arrayElement(nameArray),
      description: faker.lorem.paragraph(),
      idNo: 'id:d549a285-3859-4824-beb9-d80e6a',
      imgArray: [
        'http://via.placeholder.com/24x24',
        'http://via.placeholder.com/24x24',
        'http://via.placeholder.com/24x24',
        'http://via.placeholder.com/24x24',
        'http://via.placeholder.com/24x24'
      ],
      created: faker.date.past(),
      last_modified: faker.date.recent()
    });
  }

  return resutlArr;
})();
