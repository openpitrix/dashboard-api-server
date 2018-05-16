const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

module.exports = (function() {
  const categories = [];
  const names = [
    'Software Infrastructure',
    'Business Software',
    'Development',
    'Operation and Maintenance',
    'Security',
    'Analysis'
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
  const status = ['stopped', 'suspended', 'pending', 'active', 'ceased', 'deleted'];
  const owners = ['system', 'Samantha', 'Ethan', 'Simon'];

  for (let i = 0; i < 6; i++) {
    categories.push({
      category_id: gen.genResourceId('categories'),
      name: faker.random.arrayElement(names),
      description: faker.lorem.paragraph(),
      idNo: 'd549-a285' + gen.genResourceId('categories'),
      images: faker.random.arrayElement(images),
      appTotal: parseInt(Math.random() * 100),
      status: faker.random.arrayElement(status),
      owner: faker.random.arrayElement(owners),
      create_time: faker.date.past(),
      status_time: faker.date.recent(),
      update_time: faker.date.recent()
    });
  }

  return categories;
})();
