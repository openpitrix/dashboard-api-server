const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

const totalCount2 = 6;

module.exports = (function() {
  const resutlArr = [];
  const nameArray = [
    'RQingCloud Pek2 Devops Apps',
    'Production Service Catelog',
    'KubeCloud Testing'
  ];
  const typeArr = ['Public', 'Private'];
  const visibilityArr = ['Public', 'Private'];
  const providerArr = ['QingCloud', 'Kubernetes'];
  const statusArr = ['stopped', 'suspended', 'pending', 'active', 'ceased', 'deleted'];
  const ownerArr = ['system', 'Samantha', 'Ethan', 'Simon'];
  const labelsArr = [
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
  for (let i = 0; i < totalCount2; i++) {
    resutlArr.push({
      repo_id: gen.genResourceId('repos'),
      name: faker.random.arrayElement(nameArray),
      description: faker.lorem.paragraph(),
      type: faker.random.arrayElement(typeArr),
      url: 'http://localhost:8000/manage/repos',
      credential: 'credential',
      visibility: faker.random.arrayElement(visibilityArr),
      owner: faker.random.arrayElement(ownerArr),
      provider: faker.random.arrayElement(providerArr),
      labels: faker.random.arrayElement(labelsArr),
      selectors: [
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
      ],
      status: faker.random.arrayElement(statusArr),
      create_time: faker.date.past(),
      status_time: faker.date.recent(),
      update_time: faker.date.recent()
    });
  }

  return resutlArr;
})();
