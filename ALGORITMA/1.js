/*
Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
*/

function stringReverse(word) {
    let temp = ""
    let result = ""
    for (let i = 0; i < word.length; i++) {
        if (isNaN(word.charAt(i))) {
            result += word.charAt(i);
        }
        if (!isNaN(word[i])) {
            temp += word[i]
        }
    }
    const str = result.split("").reverse().join("");
    return console.log(str + temp);
}
let word = "NEGIE1";
stringReverse(word);