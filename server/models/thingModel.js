const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
    createdDate:String,
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    category:String,
    location:String,
    pickupOrDropoff:String,
    days:Object,
    startDate:String,
    endDate:String,
    description:String
})

module.exports = mongoose.model('Thing', thingSchema);