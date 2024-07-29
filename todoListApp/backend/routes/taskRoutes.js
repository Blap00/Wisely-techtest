const express = require('express'); //obtiene express
const { getAllTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController'); //Obtiene del controller

const router = express.Router();

router.get('/', getAllTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
