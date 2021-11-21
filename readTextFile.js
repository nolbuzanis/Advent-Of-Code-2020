let fs = require('fs');

module.exports = (fileName) => {
  return fs.readFileSync(fileName).toString().split('\n');
};
