const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bandSchema = new Schema({
    name: {
        type: String,
        trim: true
    },

    image: {
        type: String,
        trim: true
    },

    video: {
        type: String,
        trim: true
    },

    bio: {
        type: String,
        trim: true
    },

    location: {
        type: String,
        trim: true
    },

    about: {
        type: String
    }
})


const Band = mongoose.model("Band", bandSchema)


module.exports = Band;