const supertest = require('supertest');
const app = require('../app'); // Asegúrate de que esta ruta sea correcta
const assert = require('assert');

const api = supertest(app);
let createdTaskId; // Variable para almacenar el ID de la tarea creada

// Test: Obtener todas las tareas como JSON
it('Debe obtener las tareas como JSON', async () => {
    await api
        .get('/tasks')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        .then((response) => {
            // Aquí puedes verificar el contenido de la respuesta si es necesario
            assert(Array.isArray(response.body), 'Las tareas deben ser un array');
        })
        .catch((err) => {
            throw new Error(err);
        });
});

// Test: Crear una nueva tarea
it('Debe crear una nueva tarea', async () => {
    const response = await api
        .post('/tasks')
        .send({
            titulo: 'New Task',
            descripcion: 'Task description',
            estado: false
        })
        .expect(201)
        .expect('Content-Type', /application\/json/);

    createdTaskId = response.body.id; // Guardar el ID para las pruebas posteriores
    assert(response.body.titulo === 'New Task', 'El título de la tarea no coincide');
    assert(response.body.descripcion === 'Task description', 'La descripción de la tarea no coincide');
    assert(response.body.estado === false, 'El estado de la tarea no coincide');
});

// Test: Obtener tarea por ID
it('Debe obtener una tarea por ID', async () => {
    await api
        .get(`/tasks/${createdTaskId}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)
        .then((response) => {
            // Imprimir el valor obtenido en la consola
            console.log('Tarea obtenida:', response.body);
            assert(response.body.id === createdTaskId, 'El ID de la tarea no coincide');
        })
        .catch((err) => {
            throw new Error(err);
        });
});

// Test: Actualizar una tarea existente
it('Debe actualizar una tarea existente', async () => {
    const response = await api
        .put(`/tasks/${createdTaskId}`)
        .send({
            titulo: 'Updated Task',
            descripcion: 'Updated description',
            estado: true
        })
        .expect(200)
        .expect('Content-Type', /application\/json/);

    assert(response.body.id === createdTaskId, 'El ID de la tarea no coincide');
    assert(response.body.titulo === 'Updated Task', 'El título de la tarea no coincide');
    assert(response.body.descripcion === 'Updated description', 'La descripción de la tarea no coincide');
    assert(response.body.estado === true, 'El estado de la tarea no coincide');
});

// Test: Eliminar una tarea
// Test: Eliminar una tarea
it('Debería eliminar una tarea', async () => {
    // Primero, eliminamos la tarea
    await api
        .delete(`/tasks/${createdTaskId}`)
        .expect(204)
        .catch((err) => {
            throw new Error(err);
        });

    // Luego, intentamos obtener la tarea eliminada
    await api
        .get(`/tasks/${createdTaskId}`)
        .expect(404)
        .catch((err) => {
            throw new Error(err);
        });
});