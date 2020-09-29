const taskService = require('../services/task-service');
const taskSchema = require("./schemas/task-schema");

const getTasks = async (req, res, next) => {
    try {
        const tasks = await taskService.getTasks();

        res.json(tasks);
    } catch (err) {
        next(err);
    }
};

const getTaskById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const task = await taskService.getTaskById(id);

        res.json(task);
    } catch (err) {
        next(err);
    }
};

const createTask = async (req, res, next) => {
    try {
        const data = await taskSchema.validateAsync(req.body);
        const task = await taskService.createTask(data);

        res.json(task);
    } catch (err) {
        next(err);
    }
};

const updateTask = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await taskSchema.validateAsync(req.body);

        const task = await taskService.updateTask(id, data);

        res.json(task);
    } catch (err) {
        next(err);
    }
}

const deleteTaskById = async (req, res, next) => {
    try {
        const {id} = req.params;
        await taskService.deleteTaskById(id);

        res.json();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTaskById
};
