const readTextFile = require('../readTextFile');

const expenseReportArray = readTextFile('puzzle1/list.txt');
//Brute: Loop through each element, look at rest of array, break when both items equal 2020 - O(n^2) time, O(1) Space

//Part 1

console.log('Checking', expenseReportArray.length, 'values...');
//Store array in "hash table" (JS has a Set class) for O(1) lookup
const hashTable = {};
expenseReportArray.forEach((number) => {
  if (!hashTable[number]) hashTable[number] = true;
});

//Loop through array and check hash table for match
for (let i = 0; i < expenseReportArray.length; i++) {
  const lookingFor = 2020 - expenseReportArray[i];
  if (hashTable[lookingFor]) {
    console.log('Found part 1!', lookingFor * expenseReportArray[i]);
    break;
  }
}

// Brute force would be to use a triple nested loop, break when found.
// O(n ^ 3) time and O(1) space

// Could use existing hash table, use a nested loop through array and find pairs, looking up missing triplet in hash table. Break when found.
// Uses O(n^2) time and O(n) space

for (let a = 0; a < expenseReportArray.length; a++) {
  for (let b = 0; b < expenseReportArray.length; b++) {
    const missingTriplet = 2020 - expenseReportArray[a] - expenseReportArray[b];
    if (hashTable[missingTriplet]) {
      console.log(
        'Found part 2!',
        missingTriplet * expenseReportArray[a] * expenseReportArray[b]
      );
      return;
    }
  }
}
