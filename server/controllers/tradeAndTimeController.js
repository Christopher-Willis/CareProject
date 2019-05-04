const TradeAndTime = require("../models/tradeAndTimeModel");

//get current date and time in mm/dd/yyyy
var date = new Date();
var newDate= (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

exports.list =  function list(req, res) {
    TradeAndTime.find().exec().then(t=>{
        return res.json(t);
    });
}

exports.create =  function create(req, res) {
    let newTradeAndTime = new TradeAndTime({
        createdDate:newDate, //IF WE NEED IT!
        category:req.body.category,
        location:req.body.location,
        days:req.body.days,
        startTime:req.body.startTime,
        endTime:req.body.endTime,
        description:req.body.description
    });
    newTradeAndTime.save();
    return res.json(newTradeAndTime);
}

exports.update =  function update(req, res) {
    return res.json({theId: request.params.id});
}

// var tradeAndTimeSchema = new mongoose.Schema({
//     category:String,
//     days:String,
//     startTime:String,
//     endTime:String,
//     description:String
// })