const Thing = require("../models/thing");

//get current date and time in mm/dd/yyyy
var date = new Date();
var newDate= (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

exports.list =  function list(req, res) {
    Thing.find().exec().then(t=>{
        return res.json(t);
    });
}

exports.create =  function create(req, res) {
    let newThing = new Thing({
        createdDate:newDate,
        category:req.body.category,
        pickupOrDropoff:req.body.pickupOrDropoff,
        days:req.body.days,
        startTime:req.body.startTime,
        endTime:req.body.endTime,
        description:req.body.description
    });
    newThing.save();
    return res.json(newThing);
}

exports.update =  function update(req, res) {
    return res.json({theId: request.params.id});
}

// var thingSchema = new mongoose.Schema({
//     category:String,
//     pickupOrDropoff:String,
//     days:String,
//     startTime:String,
//     endTime:String,
//     description:String
// })