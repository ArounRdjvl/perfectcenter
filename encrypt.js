const bcrypt = require("bcrypt")

const plainPass = process.argv[2]

console.log("encrypting :", plainPass)

bcrypt.hash(plainPass, 10).then(hash => {
    console.log(hash)
});