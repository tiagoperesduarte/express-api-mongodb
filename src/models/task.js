const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description: String,
    done: Boolean
});

module.exports = mongoose.model('Task', taskSchema);
