const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

module.exports = (function() {
  const groups = [];
  const names = [
    'Project: Region',
    'Openpitrix',
    'Randon DB Dev',
    'Console',
    'QingCloud OpenSource',
    'KubeSphere'
  ];

  for (let i = 0; i < totalCount; i++) {
    groups.push({
      group_id: gen.genResourceId('groups', 20),
      name: faker.random.arrayElement(names),
      create_time: faker.date.past(),
      status_time: faker.date.recent(),
      update_time: faker.date.recent()
    });
  }

  return groups;
})();
