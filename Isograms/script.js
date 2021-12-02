function isIsogram(str) {
    let x = str.toLowerCase();
    for (let i = 0; i < x.length; i++) {
        for (let k = i + 1; k < x.length; k++) {
            if (x[i] == x[k]) {
                return false
            }
        }
    }
    return true
}