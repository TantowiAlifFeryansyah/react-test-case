/*
Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
*/

function stringReverse(word) {
    let num = ""
    let str = ""
    for (let i = 0; i < word.length; i++) {
        if (isNaN(word.charAt(i))) {
            str += word.charAt(i);
        }
        if (!isNaN(word[i])) {
            num += word[i]
        }
    }
    const result = str.split("").reverse().join("");
    return console.log(result + num);
}
let word = "NEGIE1";
stringReverse(word);