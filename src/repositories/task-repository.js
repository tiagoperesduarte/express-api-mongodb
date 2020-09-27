const Task = require('../models/task');

const getTasks = async () => {
    return await Task.find({});
};

const getTaskById = async (id) => {
    try {
        return await Task.findById(id);
    } catch (err) {
        return null;
    }
};

const saveTask = async (task) => {
    return await task.save();
};

const deleteTaskById = async (id) => {
    await Task.findByIdAndDelete(id);
};

module.exports = {
    getTasks,
    getTaskById,
    saveTask,
    deleteTaskById
};
