const express = require('express');
const router = express.Router();

const TaskController = require("../controllers/task-controller");

router.get('/tasks', TaskController.getTasks);
router.get('/tasks/:taskId', TaskController.getTaskById);

module.exports = router;
