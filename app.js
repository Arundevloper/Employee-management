const express=require('express');
const app=express();
const ejs=require('ejs');
const path = require('path');
const Routes=require('./routes/Routes');
const connectDb=require('./config/dbConnect');

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));



//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('',Routes);

const PORT = process.env.PORT || 3000;
connectDb('employee');
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
});