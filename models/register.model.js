const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const ImageModel = require('./image.model');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    department: {
        type: String,
        enum: ['IT', 'HR', 'FINANCE', 'MARKETING', 'SALES', 'OPERATIONS']
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    courses: [{
        type: String,
        enum: ['English', 'Maths', 'Hindi']
    }],
    profileImage: { type: mongoose.Schema.Types.ObjectId, ref: 'Image' }


},


    {
        timestamps: true
    });

// Hash the password before saving to the database
employeeSchema.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('password'))
        return next();

    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

const EmployeeModel = mongoose.model('Employee', employeeSchema);

module.exports = {
    employeeSchema,
    EmployeeModel
};