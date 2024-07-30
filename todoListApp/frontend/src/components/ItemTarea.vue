<template>
  <div>
    <h3>{{ task.titulo }}</h3>
    <p>{{ task.descripcion }}</p>
    <button @click="editTask">Edit</button>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'ItemTarea',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    editTask() {
      this.$emit('task-updated', this.task.id); // Emitir un evento para actualizar la tarea
    },
    deleteTask() {
      this.$emit('task-deleted', this.task.id); // Emitir un evento para eliminar la tarea
    }
  }
};
</script>
