const router = require("express").Router()
const { addPlace, getPlaces } = require("../controllers/place")

router.route("/").get(getPlaces).post(addPlace)



module.exports = router