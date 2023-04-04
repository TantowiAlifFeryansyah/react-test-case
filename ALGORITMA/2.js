/*
Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
*/

function longest(sentence) {
  const word = sentence.split(' ');
  let longestWord = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }
  let amount = longestWord.length;
  return console.log(`${longestWord}: ${amount} character`);
}
const sentence = "Saya sangat senang mengerjakan soal algoritma";
longest(sentence);