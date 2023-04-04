/*
Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

Contoh:

INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT
*/

function findLongestWord(INPUT, QUERY) {
  const result = [];

  for (let i = 0; i < QUERY.length; i++) {
    let count = 0;
    for (let j = 0; j < INPUT.length; j++) {
      if (INPUT[j] === QUERY[i]) count++;
    }
    result.push(count);
  }
  return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
console.log(findLongestWord(INPUT, QUERY));