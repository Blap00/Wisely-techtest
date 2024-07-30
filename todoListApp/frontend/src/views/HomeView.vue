<template>
  <div>
    <FormsTareas @task-added="fetchTasks" />
    <ListaTareas :tasks="tasks" />
  </div>
</template>

<script>
import FormsTareas from '../components/FormsTareas.vue';
import ListaTareas from '../components/ListaTareas.vue';
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    FormsTareas,
    ListaTareas
  },
  data() {
    return {
      tasks: [] // Estado para almacenar las tareas
    };
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await axios.get('http://localhost:3000/tasks');
        this.tasks = response.data; // Actualiza el estado con las tareas
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }
  },
  mounted() {
    this.fetchTasks(); // Carga las tareas al montar el componente
  }
};
</script>
