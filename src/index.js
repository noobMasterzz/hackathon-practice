const express = require("express")
const cors = require("cors")
const path = require("path")
// const env = require("dotenv").config()
const connectToDb = require("../db/connectToDb")

//router imports
const registerRoute = require("../routes/register")
const loginRoute = require("../routes/login")
const placeRoute = require("../routes/place")

const app = express()



//middlewares
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, "../client/dist")))

//authenticate user when page loads
//YESSS MAK ATONG PROBLEM NA SOLVE NA HEHEEH
app.get("/api/authenticate-user", (req, res) => {
    res.status(200).json({isUserAuthenticated: true})
})

//auth user
//register
app.use('/api/register', registerRoute)
app.use('/api/login', loginRoute)
app.use('/api/place', placeRoute)



app.all("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"))
})
connectToDb().then(() => {
    app.listen(3000, () => {
        console.log("Server is running...")
    })
})
