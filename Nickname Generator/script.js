function nicknameGenerator(name) {
    if (name.length < 4) {
        return "Error: Name too short"
    } else if ((name[2] == "a" || name[2] == "e" || name[2] == "i" || name[2] == "o" || name[2] == "u")) {
        return [name[0], name[1], name[2], name[3]].join("");
    } else if (name[3] != "a" || name[3] != "e" || name[3] != "i" || name[3] != "o" || name[3] != "u") {
        return [name[0], name[1], name[2]].join("");
    }
}