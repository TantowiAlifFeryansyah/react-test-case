/*
Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
*/

function findLongestWord(INPUT, QUERY){
const result = [];

for (let i = 0; i < QUERY.length; i++){
  let count = 0;
  for (let j = 0; j < INPUT.length; j++){
    if (INPUT[j] === QUERY[i]) count++;
  }
  result.push(count);
}
return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
console.log(findLongestWord(INPUT, QUERY));