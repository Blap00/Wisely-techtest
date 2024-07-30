<template>
  <div>
    <h1>Todo-List</h1>
    <!-- Componente para añadir nuevas tareas -->
    <TaskForm @task-added="fetchTasks" />
    <!-- Componente para mostrar la lista de tareas -->
    <TaskList />
  </div>
</template>

<script>
import FormsTareas from '../components/FormsTareas.vue';
import ListaTareas from '../components/ListaTareas.vue';  

export default {
  name: 'HomeView',
  components: {
    FormsTareas,
    ListaTareas,
  },
  methods: {
    // Puedes agregar métodos aquí si es necesario
  },
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>
