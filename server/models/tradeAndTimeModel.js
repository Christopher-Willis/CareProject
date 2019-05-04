const mongoose = require('mongoose');

const tradeAndTimeSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    category:String,
    location:String,
    days:String,
    startTime:String,
    endTime:String,
    description:String
})

module.exports = mongoose.model('TradeAndTime', tradeAndTimeSchema);