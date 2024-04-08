const router = require("express").Router()
const loginUser = require("../controllers/login")

router.route('/').post(loginUser)

module.exports = router