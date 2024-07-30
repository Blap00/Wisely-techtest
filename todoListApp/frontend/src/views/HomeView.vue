<template>
  <div>
    <FormsTareas :taskToEdit="taskToEdit" @task-added="fetchTasks" />
    <ListaTareas 
      :tasks="tasks" 
      @edit-task="setTaskToEdit" 
      @delete-task="deleteTask" 
    />
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
      tasks: [],
      taskToEdit: null
    };
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await axios.get('http://localhost:3000/tasks');
        this.tasks = response.data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    setTaskToEdit(task) {
      this.taskToEdit = task;
    },
    async deleteTask(taskId) {
      try {
        await axios.delete(`http://localhost:3000/tasks/${taskId}`);
        this.fetchTasks();
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  },
  mounted() {
    this.fetchTasks();
  }
};
</script>
