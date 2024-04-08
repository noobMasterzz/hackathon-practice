const User = require("../schemas/userSchema")

const loginUser = async (req, res) => {
    const { email, password } = req.body //tell client
   try{
        const foundUser = await User.findOne({ email })
        if(!foundUser) return res.sendStatus(401)

        //check if password matched
        if(password !== foundUser.password) return res.status(400).json({message: "Invalid Credentials"})

        //if everything matched
        //tell client to make the necessary routing based on the role of a user
        res.status(200).json({user: foundUser })
   }catch(error){
        console.log(error)
        return res.sendStatus(500)
   }

}

module.exports = loginUser