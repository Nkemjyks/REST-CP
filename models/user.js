const mongoose = require('mongoose')

//schema:user
let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    uname: {
        type: String,
        required: true
    },
    pword: {
        type: String,
        required: true
    }
})

//model
module.exports =  mongoose.model("User", userSchema)