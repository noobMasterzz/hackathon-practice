const User = require("../schemas/userSchema")

const register = async (req, res) => {
    const {firstname, lastname, email, password} = req.body

    const createdUser = await  User.create({
        firstname,
        lastname,
        email,
        password
    })
    console.log(createdUser)
    
    return res.status(201).json({success: true, message: `${firstname} has been created!`})
}

module.exports = register