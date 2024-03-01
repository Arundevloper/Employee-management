const mongoose = require("mongoose");

const connectDb = async (dbName) => {
    try {
        const connection = await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database Connected", connection.connection.host, connection.connection.name);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDb;
