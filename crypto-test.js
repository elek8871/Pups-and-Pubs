const crypto = require("crypto-js")

// encryption is a 2 way process
    // data is encrpyted using an algorythm and a key
    // you need the key to decrypt the data

    const mySecrets = "i ate candy for breakfast"

     const myEncryption = crypto.AES.encrypt(mySecrets, "myEncKey")
     console.log(myEncryption)

     const myDecrypt = crypto.AES.decrypt(myEncryption.toString(), 'myEncKey')
    console.log(myDecrypt.toString(crypto.enc.Utf8)) // select character encoding

// hashing is a one way process - always return the same size hash regardless of input
// return the same value for the same input
// all passwords will be hashed in the db

const bcrypt = require("bcrypt")
const myPassword = "1234password"
                //    (password, salt factor)
const hashedPassword = bcrypt.hashSync(myPassword, 12)
console.log(hashedPassword)

// can't unhash can only compare strings to see if they match
// returns true
// console.log(bcrypt.compareSync("1234password", hashedPassword))
// returns false
console.log(bcrypt.compareSync("banana", hashedPassword))