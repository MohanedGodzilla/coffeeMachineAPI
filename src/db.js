const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

module.exports = async (URI) => {
    mongoose.connect(URI,{
        useNewUrlParser: true
    }).then(() => console.log('DB connected'))
    .catch(err => console.error('could not connect to DB', err));
};

module.exports.dropDatabase = () => mongoose.connection.db.dropDatabase();