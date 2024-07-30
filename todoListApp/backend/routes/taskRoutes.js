// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const validateTask = require('../middlewares/validarTareas');
const errorHandler = require('../middlewares/errorHandler');

router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', validateTask, taskController.createTask);
router.put('/tasks/:id', validateTask, taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

// Usar el middleware de manejo de errores
router.use(errorHandler);

module.exports = router;
