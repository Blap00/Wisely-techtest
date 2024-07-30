const { body, validationResult } = require('express-validator');

// Middleware para validar datos de entrada al crear o actualizar una tarea
const validateTask = [
  body('titulo').notEmpty().withMessage('Title is required'),
  body('descripcion').optional().isString().withMessage('Description must be a string'),
  body('estado').isBoolean().withMessage('State must be a boolean'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateTask;
