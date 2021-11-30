function explode(s) {
    let a = "";
    for (let i = 0; i < s.length; i++) {
        for (let k = 0; k < s[i]; k++) {
            a += s[i];
        }
    }
    return a;
}
