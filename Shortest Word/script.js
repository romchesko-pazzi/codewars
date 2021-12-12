function findShort(s) {
    s = s.split(" ");
    let x = s[0].length;
    for (let i = 1; i < s.length; i++) {
        if (s[i].length < x) {
            x = s[i].length;
        }
    }
    return x;
}