const request = require('supertest');
const { expect } = require('chai');
const app = require('../app'); // Asegúrate de que esta ruta sea correcta

describe('Task API', () => {
    let taskId;

    it('Debe crear una nueva tarea', (done) => {
        request(app)
            .post('/tasks')
            .send({ titulo: 'Test Task', descripcion: 'This is a test task' })
            .expect(201)
            .then((res) => {
                expect(res.body).to.have.property('id');
                expect(res.body.titulo).to.equal('Test Task');
                expect(res.body.descripcion).to.equal('This is a test task');
                taskId = res.body.id;
                done();
            })
            .catch((err) => done(err));
    });

    it('Debe obtener todas las tareas', (done) => {
        request(app)
            .get('/tasks')
            .expect(200)
            .then((res) => {
                expect(res.body).to.be.an('array');
                done();
            })
            .catch((err) => done(err));
    });

    it('Debe actualizar una task', (done) => {
        request(app)
            .put(`/tasks/${taskId}`)
            .send({ titulo: 'Updated Test Task', descripcion: 'This is an updated test task', estado: true })
            .expect(200)
            .then((res) => {
                expect(res.body.titulo).to.equal('Updated Test Task');
                expect(res.body.descripcion).to.equal('This is an updated test task');
                expect(res.body.estado).to.be.true;
                done();
            })
            .catch((err) => done(err));
    });

    it('Deberia eliminar una tarea', (done) => {
        request(app)
            .delete(`/tasks/${taskId}`)
            .expect(204)
            .then(() => done())
            .catch((err) => done(err));
    });
});
