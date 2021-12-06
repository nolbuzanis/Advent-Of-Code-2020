const readTextFile = require('../../readTextFile');

const passwords = readTextFile('puzzle2/passwords.txt');

console.log(passwords.length);
//parse criteria from string, separated by ":"
let valid = [];

passwords.forEach((line) => {
  const [criteria, password] = line.split(':');

  const min = parseInt(criteria[0]);
  const max = parseInt(criteria.split('-')[1]);
  const letter = criteria.split(' ')[1];

  let count = 0;
  // for each password track the instances of the letter
  for (let i = 0; i < password.length; i++) {
    if (password[i] === letter) {
      count++;
    }
  }
  if (count >= min && count <= max) {
    valid.push({
      min,
      max,
      count,
    });
  }
});

console.log('Valid passwords: ', valid.length);
// console.log(passwords[0].split(':'));

// console.log(passwords);
