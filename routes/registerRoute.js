const express = require('express');
const router = express.Router();
const { register } = require('../controllers/registerController');
const multer = require('multer');

// Multer configuration
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder for uploaded files

// POST route for registering with file upload middleware
router.post('', upload.single('profileImage'), register);

// GET route for rendering registration form (if needed)
router.get('', (req, res) => {
    res.render('register'); // Render your registration form template
});

module.exports = router;
