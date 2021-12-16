function disemvowel(str) {
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U") {
            str.splice(i, 1);
            i--;
        }
    }
    str = String(str.join(""));
    return str;
}