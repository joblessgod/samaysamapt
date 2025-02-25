const fs = require("fs")

function TimeShow() {
    return new Date();
}

function ReadMeUpdate(string) {
    const dir = `./${string}`;

    if (fs.existsSync(dir) == "") {
        return console.log("File name can't be empty!")
    } else if (fs.existsSync(dir)) {
        return console.log("File Already Created!")
    } else {
        fs.mkdirSync(dir);
        return console.log("File Created")
    }
}

module.exports = {
    TimeShow, ReadMeUpdate
}