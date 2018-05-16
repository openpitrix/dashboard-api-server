const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

module.exports = (function() {
  const resutlArr = [];
  const names = ['RQingCloud Pek2 Devops Apps', 'Production Service Catelog', 'KubeCloud Testing'];
  const types = ['Public', 'Private'];
  const visibilities = ['Public', 'Private'];
  const providers = ['QingCloud', 'Kubernetes'];
  const status = ['stopped', 'suspended', 'pending', 'active', 'ceased', 'deleted'];
  const owners = ['system', 'Samantha', 'Ethan', 'Simon'];
  const labels = [
    [
      { label_key: 'database', label_value: '5 nodes ha IAM112aa' },
      { label_key: 'CICD', label_value: '1.3.2' },
      { label_key: 'apache', label_value: 'v2.3.1.42' },
      { label_key: 'database', label_value: '5 nodes ha IAMdasa' },
      { label_key: 'CICD', label_value: 'true' },
      { label_key: 'apache', label_value: 'v2.3.1.42' }
    ],
    [
      { label_key: 'CICD', label_value: '1.3.2' },
      { label_key: 'database', label_value: '5 nodes ha IAMdasa' },
      { label_key: 'apache', label_value: 'v2.3.1.42' }
    ]
  ];
  const selectors = [
    [
      {
        selector_key: 'selector_key',
        selector_value: 'selector_value'
      },
      {
        selector_key: 'selector_key2',
        selector_value: 'selector_value2'
      },
      {
        selector_key: 'selector_key3',
        selector_value: 'selector_value3'
      }
    ]
  ];
  for (let i = 0; i < totalCount; i++) {
    resutlArr.push({
      repo_id: gen.genResourceId('repos'),
      name: faker.random.arrayElement(names),
      description: faker.lorem.paragraph(),
      type: faker.random.arrayElement(types),
      url: faker.internet.url(),
      credential: 'credential',
      visibility: faker.random.arrayElement(visibilities),
      owner: faker.random.arrayElement(owners),
      provider: faker.random.arrayElement(providers),
      labels: faker.random.arrayElement(labels),
      selectors: faker.random.arrayElement(selectors),
      status: faker.random.arrayElement(status),
      create_time: faker.date.past(),
      status_time: faker.date.recent(),
      update_time: faker.date.recent()
    });
  }

  return resutlArr;
})();
