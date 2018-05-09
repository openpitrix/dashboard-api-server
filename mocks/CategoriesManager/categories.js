const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

const totalCount2 = 6;

module.exports = (function() {
  const resutlArr = [];
  const nameArray = [
    'Software Infrastructure',
    'Business Software',
    'Development',
    'Operation and Maintenance',
    'Security',
    'Analysis'
  ];
  const imgArr = [
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
  const statusArr = ['stopped', 'suspended', 'pending', 'active', 'ceased', 'deleted'];
  const ownerArr = ['system', 'Samantha', 'Ethan', 'Simon'];
  for (let i = 0; i < totalCount2; i++) {
    resutlArr.push({
      categorie_id: gen.genResourceId('categories'),
      name: faker.random.arrayElement(nameArray),
      description: faker.lorem.paragraph(),
      idNo: 'd549-a285' + gen.genResourceId('categories'),
      imgArray: faker.random.arrayElement(imgArr),
      appTotal: parseInt(Math.random() * 100),
      status: faker.random.arrayElement(statusArr),
      owner: faker.random.arrayElement(ownerArr),
      create_time: faker.date.past(),
      status_time: faker.date.recent(),
      update_time: faker.date.recent()
    });
  }

  return resutlArr;
})();
