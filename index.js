const faker=require('faker');
const db=require('./data/db.json');

// faker.locale = 'zh_CN';

module.exports = function() {
  // generate fake data

  const now=+Date;
  // return db;
  return db;
};