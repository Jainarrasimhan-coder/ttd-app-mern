const mongoose = require('mongoose');



const Connection = async(username, password) => {
    const URL = process.env.MONGO_URI
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, })
        console.log('Mongodb TTD connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

module.exports = Connection;