const Thing = require("../models/thingModel");

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
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phone:req.body.phone,
        category:req.body.category,
        location:req.body.location,
        organization:req.body.organization,
        pickupOrDropoff:req.body.pickupOrDropoff,
        days:req.body.days,
        startDate:req.body.startDate,
        endDate:req.body.endDate,
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