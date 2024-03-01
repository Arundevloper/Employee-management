const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    contentType: { type: String, required: true },
    size: { type: Number, required: true },
    uploadDate: { type: Date, default: Date.now },

});

const ImageModel = mongoose.model('Image', imageSchema);

module.exports = ImageModel;
