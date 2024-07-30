<template>
  <div>
    <h1>Lista de Tareas</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Descripción</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.id }}</td>
          <td>{{ task.titulo }}</td>
          <td>{{ task.descripcion }}</td>
          <td>{{ task.estado ? 'Completed' : 'Pending' }}</td>
          <td>
            <button @click="editTask(task.id)">Editar</button>
            <button @click="deleteTask(task.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  components: {

  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    fetchTasks() {
      axios.get('http://localhost:3000/tasks')
        .then(response => {
          this.tasks = response.data;
        })
        .catch(error => {
          console.error('Error fetching tasks:', error);
        });
    },
    editTask(id) {
      // Lógica para editar la tarea, podría abrir un modal con un formulario para editar
      console.log('Edit task with ID:', id);
    },
    deleteTask(id) {
      axios.delete(`http://localhost:3000/tasks/${id}`)
        .then(() => {
          this.fetchTasks(); // Refresca la lista después de eliminar
        })
        .catch(error => {
          console.error('Error deleting task:', error);
        });
    }
  },
  created() {
    this.fetchTasks();
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

button {
  margin-right: 5px;
}
</style>
