const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String, 
    country: String,
    stars: Number, // de 1 à 5 étoiles
    hasSpa: Boolean,
    asPool: Boolean, 
    priceCategory: Number, // de 1 à 3
});

const hotelModel= mongoose.model("hotel", hotelSchema);

module.exports= hotelModel;


