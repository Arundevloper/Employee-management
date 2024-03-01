const express=require('express');
const Router=express.Router();
const {register }=  require('../controllers/registerController');




// POST route for registering
Router.route('').post(register).get((req,res)=>res.render('register'));



module.exports =Router;


