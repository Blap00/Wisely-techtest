<template>
  <div>
    <h1>Lista de Tareas</h1>
    <TaskForm @task-added="fetchTasks" />
    <ul>
      <TaskItem 
        v-for="task in tasks" 
        :key="task.id" 
        :task="task" 
        @task-updated="fetchTasks"
        @task-deleted="fetchTasks"
      />
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import FormsTareas from './FormsTareas.vue';
import ItemTarea from './ItemTarea.vue';

export default {
  components: {
    FormsTareas,
    ItemTarea,
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
  },
  created() {
    this.fetchTasks();
  },
};
</script>
