var express = require('express');
var app = express();
 var port = process.env.PORT || 4013;
 var mongoose = require('mongoose');
 var Task = require('./Model/SignUp_Model');
//  const app = require("express")();
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

app.use(require("body-parser").text());

 
 var bodyParser = require('body-parser');
 const cors =require('cors')
 
  

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Register', 
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routes = require('./Router/Signup_Router');

app.use(cors());

routes(app); 
app.use((error,req,res,next)=>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({
        message:message
    });
});
app.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json({status});
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  });

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);