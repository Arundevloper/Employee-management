const express = require('express');
const router = express.Router();
const { register } = require('../controllers/registerController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


router.post('/register', upload.single('profileImage'), register);

router.get('/register', (req, res) => {
    res.render('register'); 
});


router.get('/login',(req,res)=>{
    res.render('login');
});




router.get('',(req,res)=>{
    res.render('dashboard');
});



module.exports = router;
