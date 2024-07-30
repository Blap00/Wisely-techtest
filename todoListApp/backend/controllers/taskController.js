//Obtenemos la correspondiente Tarea en "Const"
const Task = require('../models/task');
"Exportamos la 'getAllTask'"
exports.getAllTasks = async (req, res, next) => {
  try {
    const tareas = await Task.findAll();
    res.json(tareas);
  } catch (err) {
    next(err);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const { titulo, descripcion } = req.body;
    const task = await Task.create({ titulo, descripcion });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion, estado } = req.body;
    const task = await Task.findByPk(id);
    if (task) {
      task.titulo = titulo;
      task.descripcion = descripcion;
      task.estado = estado;
      await task.save();
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (err) {
    next(err);
  }
};