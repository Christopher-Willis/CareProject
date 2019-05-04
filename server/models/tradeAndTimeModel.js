const mongoose = require('mongoose');

const tradeAndTimeSchema = new mongoose.Schema({
    category:String,
    location:String,
    days:String,
    startTime:String,
    endTime:String,
    description:String
})

module.exports = mongoose.model('TradeAndTime', tradeAndTimeSchema);