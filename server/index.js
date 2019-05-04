require('dotenv').config()


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const thisRoutes = require("./routes/thisRoutes")
const tradeAndTimesRoutes = require("./routes/tradeAndTimesRoutes")

const app = express();


const startWebServer = () => {

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(bodyParser.json({limit: '50mb', extended: true}))
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
  // needed to override bodyparser size limmit for my huge files

  app.get('/', function(req, res) {
    res.send('im the home page!');  
  });
  // just tester code for sever connection


  app.use(thisRoutes)
  app.use(tradeAndTimesRoutes)




  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Listening on port:${port}`);
  });
}

const path = `mongodb://carebear:carebear1@ds151486.mlab.com:51486/care-project`
mongoose.connect(path, {useNewUrlParser: true}).then(
  () => { 
    console.log("mongoose connected successfully");
    startWebServer();
    // only start the webserver if we have a connection to the dbserver
  },
  err => {
    console.log("mongoose did not connect",err);
   }
);