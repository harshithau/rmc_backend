// const mongoose = require('mongoose');
// const AdminData =require('../Model/Admin_model');

// exports.get_Product = function(req, res) {
//     AdminData.find({}, function(err, task1) {
// if (err)
// res.send(err);
// res.json(task1);
// });
// };


// exports.productname = function(req, res) {console.log(req.body)
// var AdminData = new AdminData(req.body);
// AdminData.save(function(err, task1) {
// if (err)
// res.send(err);
// res.json(task1);
// });
// };


const mongoose = require('mongoose');
const UserData =require('../Model/Admin_model');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
var isAuth=require('../Middleware/isAuth')


exports.get_a_data = function(req, res) {
UserData.find({}, function(err, task2) {
if (err)
res.send(err);
res.json(task2);
});
};



exports.update_a_task = function(req, res)
{
var User = new UserData(req.body);
User.save({},function(err, data) {
if (err)
res.send(err);
res.json(data);
});
};

// exports.delete_a_task = function(req, res) {
// UserData.remove({_id: req.params.taskId}, function(err, task) {
// if (err)
// res.send(err);
// res.json({ message: 'Task successfully deleted' });
// });
// };

// exports.read_a_task = function(req, res)
// {
// UserData.findById(req.params.taskId, function(err, task) {
// if (err)
// res.send(err);
// res.json(task);
// });
// };








