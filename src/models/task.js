import mongoose from 'mongoose';

const {Schema} = mongoose;

const taskSchema = new Schema({
    description: String,
    done: Boolean
});

mongoose.model('Task', taskSchema);