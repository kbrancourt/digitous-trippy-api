const mongoose = require("mongoose");
const hotelModel = require("./models/hotels");
const restaurantModel = require("./models/restaurants");

mongoose.connect("mongodb://localhost:27017/trippy_api'", () => {
  console.log("DB Connectée");
});



const createHotel = async () => {
    await hotelModel.deleteMany({})
    await hotelModel.create(
        {
          name: "Hôtel Pullman Paris",
          address: "18 Avenue De Suffren",
          city: "Paris", 
          country: "75015",
          stars: "4", 
          hasSpa: false,
          asPool: false, 
          priceCategory: "2",
        },
        {
          name: "Hôtel George V",
          address: "31 Avenue George V",
          city: "Paris", 
          country: "75008",
          stars: "5", 
          hasSpa: true,
          asPool: true, 
          priceCategory: "3",
        })
        
     
        console.log("Hôtel créé!")
}
 createHotel();