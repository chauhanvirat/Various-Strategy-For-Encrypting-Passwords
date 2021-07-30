const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const path = require('path');
var md5 = require('md5');          // needed for task2
const bcrypt = require('bcrypt');  // needed for task3
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

var userSchema = new Schema({
	username: String,
	password: String
});

var User = mongoose.model('User', userSchema);
mongoose.connect('mongodb://localhost:27017/userDB');

app.get('/',function(req,res){
    res.render('register.ejs');
});

// task1: store username and password directly in database.(lineno 29-41)
app.post('/',function(req,res){
    const newUser = new User({
        username : req.body.username,
        password : req.body.password
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.render("success.ejs");
        }
    });
});

//task2: Applying md5 hash function to the password and save into database.
app.post('/md5',function(req,res){
    const newUser = new User({
        username : req.body.username,
        password : md5(req.body.password)
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.render("success.ejs");
        }
    });
});

//task3: salting to the password using bcrypt
app.post('/bcrypt',function(req,res){
    bcrypt.hash(req.body.password, 5, function(err, hash) {
        const newUser = new User({
            username : req.body.username,
            password : hash
        });
        newUser.save(function(err){
            if(err){
                console.log(err);
            }else{
                res.render("success.ejs");
            }
        });
    });
});


app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
});

