const mongoose = require('mongoose');
const UserData =require('../Model/SignUp_Model');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
var isAuth=require('../Middleware/isAuth');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
    

exports.get_a_data = function(req, res) {
  UserData.find({}, function(err, task) {
  if (err)
    res.send(err);
    res.json(task);
  });
};
exports.changepassword = (req, res)=> {
  console.log(req.body);
  const pwd = cryptr.encrypt(req.body.password);
req.body.password = pwd;
  UserData.findOneAndUpdate({email: req.body.email}, req.body, {new: true}, function(err, task) {
  if (err)
  res.send(err);
  res.json(task);
  });
};
exports. signup= function(req, res){
  const reg_email=/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
  const reg_mob=/^[0-9]{10}$/;
  const reg_pwd=/^[@#][A-Za-z0-9]{9,11}$/;
  if(!reg_pwd.test(req.body.password)){
    console.log(req.body.password)
    res.send('password is invalid');
  }
  else{
    if(req.body.password===req.body.Confirmpassword){

    }else{
      res.send("password missmatch");
    }
  }
  if(!reg_mob.test(req.body.Mobnum)){
    res.send('Mobile number is invalid');
  }
  if(reg_email.test(req.body.email)){
    UserData.find({email: req.body.email},
      function(err, data){
      if(data != null && data != ''){
        res.send('User already exists');
      }
      else
      {
        var userData = new UserData(req.body);
        // bcrypt.genSalt(10, function(err, salt){
        //   bcrypt.hash(userData.password, salt,function(err, hash) {
        //     userData.password = hash;
            userData.save(function(err, data){
              if(err)
                res.send(err.message);
              res.json(data);
            })
        //   })
        // })
      }
    });
  }
  else {
    res.send('Email is invalid');
  }
};

exports.read_a_task = function(req, res) 
{
  UserData.findById(req.params.taskId, function(err, task) {
  if (err)
  res.send(err);
  res.json(task);
  });
  };

exports.update_a_task = function(req, res)
{
  UserData.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
  if (err)
  res.send(err);
  res.json(task);
  });
};
exports.delete_a_task = function(req, res) {
  UserData.remove({_id: req.params.taskId}, function(err, task) {
  if (err)
  res.send(err);
  res.json({ message:'Task successfully deleted' });
  });
};



exports.userSignin = (req,res,next) =>{
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  UserData.findOne({email: email})
  .then(user =>{
    if(!user){
      const error = new Error('User does not exist');
      error.statusCode = 401;
      throw error;
    
    }
    loadedUser = user;
    const pwd = cryptr.decrypt(user.password)
    return (password=== pwd)
    // return bcrypt.compare(password,user.password);
  })
  .then(isEqual =>{
    if(!isEqual){
      const error = new Error('wrong password');
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign(
    {
      role: loadedUser.role,
      email: loadedUser.email,
      userId:loadedUser._id.toString()
    },'secret')
    return res.status(200).json({token: token, userId: loadedUser._id.toString(), role: loadedUser.role,})
  })
  .catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }); 
}








