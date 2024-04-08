const express = require("express")
const cors = require("cors")
const path = require("path")
const env = require("dotenv").config()
const connectToDb = require("../db/connectToDb")

//router imports
const registerRoute = require("../routes/register")

const app = express()



//middlewares
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())


//auth user
app.use('/api/register', registerRoute)



connectToDb().then(() => {
    app.listen(3000, () => {
        console.log("Server is running...")
    })
})
