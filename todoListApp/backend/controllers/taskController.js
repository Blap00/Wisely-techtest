//Obtenemos la correspondiente Tarea en "Const"
const Task = require('../models/task');
"Exportamos la 'getAllTask'"
exports.getAllTasks = async (req, res) => {
  try {
    const tareas = await Task.findAll(); //Encuentra todas las tareas
    res.json(tareas); //Deja como respuesta 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body; //Definimos reglas de la creación
    const task = await Task.create({ titulo, descripcion }); //Al crear la tarea define el titulo y descripción
    res.status(201).json(task); //Entrega tarea con codigo 201 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params; //Segun la ID seleccionada desde parametros
    console.log(id)
    const { titulo, descripcion, estado } = req.body; //Obtiene los datos de Titulo, descripcion y estado correspondiente
    const task = await Task.findByPk(id); //Encuentra el obj de Task por la Id de parametros
    if (task) { //Si el OBJ existe, entonces
      task.titulo = titulo; //Define titulo
      task.descripcion = descripcion; //Define descripcion
      task.estado = estado; //Define Estado
      await task.save(); // Espera y realiza el guardado de la tarea
      res.json(task); // Entrega respuesta
    } else {
      res.status(404).json({ error: 'Task not found' }); //Entrega error 404 sobre el error
    }
  } catch (err) {
    res.status(500).json({ error: err.message }); //Entrega error 500 + mensaje
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params; //Obtiene id de parametros
    const task = await Task.findByPk(id); //Encuentra task por Id
    if (task) { //Si existe
      await task.destroy(); // Destruye la tarea (Elimina)
      res.status(204).end(); // Entrega codigo de finalización
    } else {
      res.status(404).json({ error: 'Task not found' }); // Entrega codigo de error
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
