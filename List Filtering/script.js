function filter_list(l) {
    let newArray = l.filter(function (number) {
        return Number.isInteger(number);
    });
    return newArray;
}