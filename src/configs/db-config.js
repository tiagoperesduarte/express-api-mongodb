const mongoose = require('mongoose');

const configureDb = (app) => {
    mongoose.connect(process.env.APP_DB_URI, {useNewUrlParser: true});
};

module.exports = configureDb;
