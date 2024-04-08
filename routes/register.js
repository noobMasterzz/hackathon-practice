const router = require("express").Router()
const registerUser = require("../controllers/registerUser")
router.route('/').post(registerUser)



module.exports = router