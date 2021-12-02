function isIsogram(str) {
    let str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        for (let k = i + 1; k < str.length; k++) {
            if (str[i] == str[k]) {
                return false
            }
        }
    }
    return true
}

// function isIsogram(str){
//   return new Set(str.toUpperCase()).size == str.length;
// }