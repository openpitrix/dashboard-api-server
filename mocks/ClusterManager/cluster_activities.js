const faker = require('faker');
const gen = require('../../utils/gen');
const { totalCount } = require('../../config');

module.exports = (function() {
  const activities = [];
  const names = ['Stop Cluster', 'Create Cluster', 'Stop Resources'];

  for (let i = 0; i < totalCount; i++) {
    activities.push({
      activity_id: gen.genResourceId('cluster_activities'),
      cluster_id: gen.genResourceId('clusters'),
      name: faker.random.arrayElement(names),
      create_time: faker.date.past()
    });
  }

  return activities;
})();
