<template>
  <div>
    <h2>Crea una nueva tarea</h2>
    <form @submit.prevent="submitTask">
      <input v-model="titulo" placeholder="Titulo" required />
      <input v-model="descripcion" placeholder="Descripcion" />
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      titulo: '',
      descripcion: '',
    };
  },
  methods: {
    submitTask() {
      axios.post('http://localhost:3000/tasks', {
        titulo: this.titulo,
        descripcion: this.descripcion,
      })
        .then(() => {
          this.titulo = '';
          this.descripcion = '';
          this.$emit('task-added');
        })
        .catch(error => {
          console.error('Error adding task:', error);
        });
    },
  },
};
</script>
