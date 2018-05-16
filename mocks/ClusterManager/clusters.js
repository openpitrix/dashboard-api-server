const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

module.exports = (function() {
  const clusters = [];
  const demoNames = ['Kubernets', 'RandonDB', 'PostgreSQL', 'Spark', 'MySQL Plus', 'Redis'];
  const status = ['stopped', 'suspended', 'pending', 'active', 'ceased', 'deleted'];
  const owners = ['Samantha', 'Ethan', 'Simon'];
  const endpoints = ['Computer', 'Phone', 'Mac'];

  for (let i = 0; i < totalCount; i++) {
    clusters.push({
      cluster_id: gen.genResourceId('clusters'),
      name: faker.random.arrayElement(demoNames),
      description: faker.lorem.paragraph(),
      app_id: gen.genResourceId('apps'),
      version_id: 'version_' + gen.genResourceId('clusters'),
      subnet_id: 'subnet_' + gen.genResourceId('clusters'),
      vpc_id: 'vpc_' + gen.genResourceId('clusters'),
      frontgate_id: 'frontgate_' + gen.genResourceId('clusters'),
      cluster_type: { value: parseInt(Math.random() * 10) },
      endpoints: faker.random.arrayElement(endpoints),
      status: faker.random.arrayElement(status),
      transition_status: faker.random.arrayElement(status),
      metadata_root_access: true,
      owner: faker.random.arrayElement(owners),
      global_uuid: 'uuid_' + gen.genResourceId('clusters'),
      upgrade_status: faker.random.arrayElement(status),
      upgrade_time: faker.date.past(),
      runtime_id: gen.genResourceId('runtimes'),
      create_time: faker.date.past(),
      status_time: faker.date.recent()
    });
  }
  return clusters;
})();
