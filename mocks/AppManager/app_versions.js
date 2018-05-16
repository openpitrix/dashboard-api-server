const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

module.exports = (function() {
  const versions = [];
  const names = ['4.1.0 Draft', '4.0.3 Online', '3.2.9', 'Spark'];
  const statusList = ['stopped', 'suspended', 'pending', 'active', 'ceased', 'deleted'];
  const owners = ['system', 'Samantha', 'Ethan', 'Simon'];
  const packages = ['package1', 'package2', 'package3'];

  for (let i = 0; i < totalCount; i++) {
    versions.push({
      version_id: gen.genResourceId('app_versions'),
      app_id: gen.genResourceId('apps'),
      owner: faker.random.arrayElement(owners),
      name: faker.random.arrayElement(names),
      description: faker.lorem.paragraph(),
      package_name: faker.random.arrayElement(packages),
      status: faker.random.arrayElement(statusList),
      create_time: faker.date.past(),
      status_time: faker.date.recent(),
      update_time: faker.date.recent(),
      sequence: parseInt(Math.random() * 100)
    });
  }

  return versions;
})();
