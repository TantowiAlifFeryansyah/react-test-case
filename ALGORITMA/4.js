/*
Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:

Contoh:

Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

diagonal pertama = 1 + 5 + 9 = 15 
diagonal kedua = 0 + 5 + 7 = 12 

maka hasilnya adalah 15 - 12 = 3
*/

function diagonalMatrix(matrix){
  let diagonal1 = 0;
  let diagonal2 = 0;
  
  for (let i = 0; i < matrix.length; i++) {
    diagonal1 += matrix[i][i];
    diagonal2 += matrix[i][matrix.length - i - 1];
  }
  const result = diagonal1 - diagonal2;  
  return console.log(`maka hasilnya adalah ${diagonal1} - ${diagonal2} = ${result}`);
}

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9]];
diagonalMatrix(matrix)