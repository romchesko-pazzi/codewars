function descendingOrder(n) {
    n = n.toString().split("").sort().reverse().join("");
    return +n;
}