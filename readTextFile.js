let fs = require('fs');

module.exports = (fileName, numbers = false) => {
  const stringArray = fs.readFileSync(fileName).toString().split('\n');
  return numbers ? stringArray.map((value) => parseInt(value)) : stringArray;
};
