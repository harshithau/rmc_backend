// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;


// var TaskSchema = new Schema({
// Firstname: {
//     type: String,
//     required: true
//     },
// Lastname:{
//     type: String,
//     required:true
//     },
// email:{
// type: String,
// required: true
// },
// password:{
//     type: String,
//     required: true
// },

// product:{
// type: String,
// required: true
// },

// });

// module.exports = mongoose.model('Tasks1', TaskSchema);



var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
Firstname: {
type: String,
required: true
},
Lastname:{
type: String,
required:true
},

email:{
    type: String,
    required: true
    },
    password:{
        type: String,
        required: true
    },
    
    product:{
    type: String,
    required: true
    },
    



});

module.exports = mongoose.model('Tasks2', TaskSchema);