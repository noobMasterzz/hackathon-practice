const mongoose = require("mongoose");
const env = require("dotenv").config()

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connect to database... enjoy")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDb