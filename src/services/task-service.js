const {NotFoundError} = require('../errors/http-errors');
const Task = require('../models/task');
const taskRepository = require('../repositories/task-repository');

const getTasks = async () => {
    return await taskRepository.getTasks();
};

const getTaskById = async (id) => {
    const task = await taskRepository.getTaskById(id);

    if (!task) {
        throw new NotFoundError(`Task not found with identifier ${id}`);
    }

    return task;
};

const createTask = async (data) => {
    const task = new Task({
        description: data.description,
        done: data.done
    });

    return await taskRepository.saveTask(task);
};

const updateTask = async (id, data) => {
    const task = await taskRepository.getTaskById(id);

    if (!task) {
        throw new NotFoundError(`Task not found with identifier ${id}`);
    }

    task.description = data.description;
    task.done = data.done;

    return await taskRepository.saveTask(task);
};

const deleteTaskById = async (id) => {
    const task = await taskRepository.getTaskById(id);

    if (!task) {
        throw new NotFoundError(`Task not found with identifier ${id}`);
    }

    await taskRepository.deleteTaskById(id);
};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTaskById
};
