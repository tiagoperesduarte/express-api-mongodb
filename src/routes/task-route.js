const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task-controller');

router.get('/tasks', taskController.getTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTaskById);

module.exports = router;
