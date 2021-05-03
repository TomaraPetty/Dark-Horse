const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bandSchema = new Schema({
    name: {
        type: String,
        trim: true
    },

    descrption: {
        type: String,
        trim: true
    },

    image: {
        type: String
    }
})


const Band = mongoose.model("Band", bandSchema)


module.exports = Band;