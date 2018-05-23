const faker = require('faker');
const gen = require('../../utils/gen');

module.exports = (function() {
  const organizations = [];
  const companies = ['Yunify Inc.', 'Bink', 'Sitong Fang', 'Zhiyany Li'];
  const departments = ['Sales', 'Marketin', 'Solution', 'HR', 'Operation Team', 'Develop Team'];
  const staffs = [
    'Mark',
    'Jack',
    'Phoebe',
    'Jane',
    'Helen',
    'Danny',
    'Claire',
    'Lemmo',
    'Roes',
    'Sir',
    'Hack',
    'Jims'
  ];
  let temp;
  for (let i = 0; i < companies.length; i++) {
    temp = {
      org_id: gen.genResourceId('organizations'),
      company: companies[i],
      department: [],
      create_time: faker.date.past(),
      status_time: faker.date.recent(),
      update_time: faker.date.recent()
    };
    for (let j = 0; j < departments.length; j++) {
      temp.department.push({
        name: departments[j],
        staff: staffs.slice(0, parseInt(12 * Math.random()))
      });
    }
    organizations.push(temp);
  }
  return organizations;
})();
