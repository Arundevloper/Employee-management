const { EmployeeModel } = require('../models/register.model');
const ImageModel = require('../models/image.model'); // Import the ImageModel schema

async function register(req, res) {
    const { name, email, password, department, gender, courses } = req.body;

    try {
        // Handle image upload
        const imageFile = req.file; // Access the uploaded image file using req.file
        if (!imageFile) {
            return res.status(400).json({ error: 'No image uploaded' });
        }

        // Create a new image document
        const image = new ImageModel({
            filename: imageFile.originalname,
            contentType: imageFile.mimetype,
            size: imageFile.size
        });
        await image.save();

        // Create a new employee instance with profileImage reference
        const newEmployee = new EmployeeModel({
            name,
            email,
            password,
            department,
            gender,
            courses: Array.isArray(courses) ? courses : [courses],
            profileImage: image._id // Associate the image with the employee
        });

        // Save the new employee to the database
        await newEmployee.save();

        // Send a success response
        res.status(201).json({ message: 'Employee registered successfully', data: newEmployee });
    } catch (error) {
        // Handle errors
        console.error('Error registering employee:', error);
        res.status(500).json({ error: 'An error occurred while registering employee' });
    }
}

module.exports = { register };
