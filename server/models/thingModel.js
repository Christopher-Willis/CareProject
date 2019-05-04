const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
    category:String,
    pickupOrDropoff:String,
    days:String,
    startTime:String,
    //have open availability option on front
    endTime:String,
    description:String
})

module.exports = mongoose.model('Thing', thingSchema);