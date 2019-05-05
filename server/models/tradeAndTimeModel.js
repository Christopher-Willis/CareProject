const mongoose = require('mongoose');

const tradeAndTimeSchema = new mongoose.Schema({
    createDate:String,
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    category:String,
    location:String,
    organization:String,
    days:Object,
    startDate:String,
    endDate:String,
    description:String
})

module.exports = mongoose.model('TradeAndTime', tradeAndTimeSchema);