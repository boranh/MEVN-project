const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // require: true,
        // unique: true
    },
    email: {
        type: String,
        // require: true,
        // unique: [true, "Email id is already present"],
        // Validate(value) {
        //     if (validator.isEmail(value)) {
        //         throw new Error("Invalid Email")
        //     }
        // }
    },
    password: {
        type: String,
        require: true
    }
})


// will create new connection
const Users = new mongoose.model('Users', userSchema);

module.exports = Users;