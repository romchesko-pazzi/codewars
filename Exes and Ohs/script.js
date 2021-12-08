function XO(str) {
    let one = null;
    let two = null;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "x" || str[i] == "X") {
            one += 1;
        } else if (str[i] == "o" || str[i] == "O") {
            two += 1;
        }
    }
    return one == two ? true : false;
}
XO("xxOo");