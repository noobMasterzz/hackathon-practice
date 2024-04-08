const mongoose = require("mongoose")
const Schema = mongoose.Schema


const PlaceSchema =  new Schema({
    location: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Place", PlaceSchema)