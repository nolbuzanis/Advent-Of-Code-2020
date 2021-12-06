const readTextFile = require('../../readTextFile');

const depths = readTextFile('2021/day1/data1.txt', true);

const getNoOfIncreases = (data, interval) => data.reduce( 
  (total, currVal, currIndex) => 
    (data[currIndex + interval] > currVal) ? total + 1 : total, 
    0 // initial value of total 
);

const puzzleOne = () => {
  let increase = 0;
  let decrease = 0;
  //O(n) since we have to iterate through the array
  for(let i = 1; i < depths.length; i++){
    if(depths[i] > depths[i-1]) increase++;
    else decrease++;
  }

  return {increase, decrease, total: depths.length};
};

const puzzleTwo = () => {
  let increase = 0;
  let decrease = 0;
  //O(n) since we have to iterate through the array
  for(let i = 0; i < depths.length; i++){
    if(i+3 === depths.length) break;
    const firstSum = depths.slice(i, i+3).reduce((sum, currentValue) => sum+currentValue);
    const secondSum = depths.slice(i+1, i+4).reduce((sum, currentValue) => sum+currentValue);
    console.log(firstSum, secondSum, secondSum > firstSum ? 'Increase' : 'Decrease');
    if(secondSum > firstSum) increase++;
    else decrease++;
  }

  return {increase, decrease, total: depths.length};
};

console.log(puzzleTwo());
