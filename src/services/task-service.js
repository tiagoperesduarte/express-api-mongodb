const {NotFoundError} = require("../errors/http-error");

let tasks = [];

const getTasks = () => {
    return Promise.resolve(tasks);
};

const getTaskById = (id) => {
    const task = tasks.find(task => task.id == id);

    if (!task) {
        throw new NotFoundError(`Task not found with identifier ${id}`);
    }

    return Promise.resolve(task);
};

const createTask = (task) => {
    tasks.push(task);

    return Promise.resolve(task);
};

const updateTask = (id, task) => {
    const index = getTaskIndexById(id);

    if (index === -1) {
        throw new NotFoundError(`Task not found with identifier ${id}`);
    }

    tasks[index] = task;

    return Promise.resolve(task);
};

const deleteTaskById = (id, task) => {
    const index = getTaskIndexById(id);

    if (index === -1) {
        throw new NotFoundError(`Task not found with identifier ${id}`);
    }

    tasks.splice(index, 1);

    return Promise.resolve();
};

const getTaskIndexById = (id) => {
    const task = tasks.find(task => task.id == id);

    if (!task) {
        return -1;
    }

    return tasks.indexOf(task);
};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTaskById
};
