const User = require("../schemas/userSchema")

const register = async (req, res) => {
    const {firstname, lastname, email, password} = req.body

   try{
     //check first if user already exist in the database by its email
        const foundUser = await User.findOne({email})
        if(foundUser) return res.status(409).json({message: "Email is already taken"})
        const createdUser = await  User.create({
            firstname,
            lastname,
            email,
            password,
        })
        console.log(createdUser)
        
        return res.status(201).json({success: true, message: `${firstname} has been created!`})
   }catch(error){
    console.log(error)
    return res.sendStatus(500)
   }
}

module.exports = register