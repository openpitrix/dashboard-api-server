const resource = require('../utils/resource');

module.exports = sharedVals => {
  return (req, res, next) => {
    let resName = resource.getResourceNameFromRequest(req);
    let idKey = resource.getPrimaryKey(resName);

    sharedVals.lastResourceName = resName;
    sharedVals.lastIdKey = idKey;

    next();
  };
};
