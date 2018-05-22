const faker = require('faker');
const gen = require('../../utils/gen');

module.exports = (function() {
  const authorities = [];
  const categories = ['Repos', 'Runtimes', 'Apps', 'Clusters'];
  const descriptions = [
    'Provides full access to Openpitrix services and resources.',
    'Grants full access to AlexaForBusiness resources and access to related AWS Services',
    'Provide gateway execution access to AlexaForBusiness services',
    "Allows API Gateway to push logs to user's account."
  ];
  const authorityList = [
    'GetConsoleOutput',
    'GetConsoleScreenshot',
    'GetHostReservationPurchasePreview',
    'GetLaunchTemplateData',
    'GetPasswordData',
    'GetReservedInstancesExchangeQuote',
    'DescribeElasticGpus',
    'DescribeScheduledInstanceAvailability',
    'DescribeScheduledInstances',
    'DescribeTags',
    'DescribeVolumesModifications',
    'DescribeVpnConnections'
  ];
  for (let i = 0; i < categories.length; i++) {
    authorities.push({
      authority_id: gen.genResourceId('authorities'),
      name: categories[i],
      description: descriptions[i],
      list: authorityList.slice(0, parseInt(12 * Math.random())),
      read: authorityList.slice(0, parseInt(12 * Math.random())),
      write: authorityList.slice(0, parseInt(12 * Math.random())),
      create_time: faker.date.past(),
      status_time: faker.date.recent(),
      update_time: faker.date.recent()
    });
  }
  return authorities;
})();
