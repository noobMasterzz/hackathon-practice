const Place = require('../schemas/Places')

const addPlace = async (req, res) => {
    console.log(req.body)
    const {location, image, name, description } = req.body
    //tell client these must be the correct fields to be provided
    try{
        const createdPlace = await Place.create({
            location,
            img: image,
            name,
            description
        });
        console.log(createdPlace)
        return res.status(201).json({success: true, place: createdPlace})
   }catch(error){
        console.log(error)
        return res.sendStatus(500)
   }
    
}

const getPlaces = async (req, res) => {
    try{
        const allPlaces = await Place.find({})
        res.status(200).json({success: true, places: allPlaces})
    }catch(error){
        console.log(error)
        return res.sendStatus(500)
    }
}

module.exports = {
    getPlaces,
    addPlace
}