const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

module.exports = (function() {
  const resutlArr = [];
  const demoNames = ['Kubernets', 'RandonDB', 'PostgreSQL', 'Spark', 'MySQL Plus', 'Redis'];
  const statusArr = ['stopped', 'suspended', 'pending', 'active', 'ceased', 'deleted'];
  const providerArr = ['QingCloud', 'Kubernetes'];
  const ownerArr = ['system', 'Samantha', 'Ethan', 'Simon'];
  const zoneNames = ['pek2', 'gd1', 'zw1'];
  for (let i = 0; i < totalCount; i++) {
    resutlArr.push({
      runtime_id: gen.genResourceId('runtimes'),
      name: faker.random.arrayElement(demoNames),
      description: faker.lorem.paragraph(),
      provider: faker.random.arrayElement(providerArr),
      runtime_url: 'runtime_url',
      zone: faker.random.arrayElement(zoneNames),
      runtime_credential: 'runtime_credential',
      labels: [
        {
          runtime_label_id: gen.genResourceId('runtime_label'),
          runtime_id: gen.genResourceId('runtimes'),
          label_key: 'database',
          label_value: '5 nodes ha IAM..',
          create_time: faker.date.past()
        },
        {
          runtime_label_id: gen.genResourceId('runtime_label'),
          runtime_id: gen.genResourceId('runtimes'),
          label_key: 'CICD',
          label_value: 'true',
          create_time: faker.date.past()
        },
        {
          runtime_label_id: gen.genResourceId('runtime_label'),
          runtime_id: gen.genResourceId('runtimes'),
          label_key: 'apache',
          label_value: 'v2.3.1.42',
          create_time: faker.date.past()
        }
      ],
      owner: faker.random.arrayElement(ownerArr),
      status: faker.random.arrayElement(statusArr),
      create_time: faker.date.past(),
      status_time: faker.date.recent(),
      update_time: faker.date.recent()
    });
  }
  return resutlArr;
})();
