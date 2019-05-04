const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    category:String,
    location:String,
    pickupOrDropoff:String,
    days:String,
    startTime:String,
    //have open availability option on front
    endTime:String,
    description:String
})

module.exports = mongoose.model('Thing', thingSchema);