
const mongoose = require("mongoose");


const formSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    signal: {
        type: String,
    },
    scrip: {
        type: String,
    },
    cmp: {
        type: String,
    },
    tgt: {
        type: String,
    },
    sl: {
        type: String,
    },
})


const Form = new mongoose.model('Form', formSchema);
module.exports = Form;