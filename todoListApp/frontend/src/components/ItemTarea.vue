<template>
  <li>
    <input type="checkbox" v-model="task.estado" @change="updateTask" />
    <span :class="{ done: task.estado }">{{ task.titulo }}</span>
    <button @click="deleteTask">Eliminar</button>
  </li>
</template>

<script>
import axios from 'axios';

export default {
  props: ['task'],
  methods: {
    updateTask() {
      axios.put(`http://localhost:3000/tasks/${this.task.id}`, {
        titulo: this.task.titulo,
        descripcion: this.task.descripcion,
        estado: this.task.estado,
      })
        .then(() => {
          this.$emit('task-updated');
        })
        .catch(error => {
          console.error('Error updating task:', error);
        });
    },
    deleteTask() {
      axios.delete(`http://localhost:3000/tasks/${this.task.id}`)
        .then(() => {
          this.$emit('task-deleted');
        })
        .catch(error => {
          console.error('Error deleting task:', error);
        });
    },
  },
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>