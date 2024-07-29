const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
    /**Definimos los correspondientes modelos de tareas, esto segun la estructura de 
     * id:integer
     * title:string
     * description:tex
     * status:boolean
     */
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = Task;
