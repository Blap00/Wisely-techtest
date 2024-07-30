<template>
  
  <div>
    <div v-if="errors.length" class="alert alert-danger mt-3">
      <ul>
        <li v-for="error in errors" :key="error.msg">{{ error.msg }}</li>
      </ul>
    </div>
    <h2>{{ editMode ? 'Editar Tarea' : 'Crear Tarea' }}</h2>
    <form @submit.prevent="submitForm" class="task-form row">
      <div class="form-group col-5">
        <label for="titulo">Título:</label>
        <input type="text" v-model="task.titulo" required />
      </div>
      <div class="form-group col-5">
        <label for="descripcion">Descripción:</label>
        <input type="text" v-model="task.descripcion" />
      </div>
      <div class="form-group col-1">
        <label for="estado">Estado:</label>
        <input type="checkbox" v-model="task.estado" />
      </div>
      <button type="submit">{{ editMode ? 'Actualizar' : 'Agregar' }}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    taskToEdit: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      task: {
        id: null,
        titulo: '',
        descripcion: '',
        estado: false
      },
      editMode: false,
      errors: [] // Estado para almacenar errores
    };
  },
  watch: {
    taskToEdit: {
      immediate: true,
      handler(newTask) {
        if (newTask) {
          this.task = { ...newTask };
          this.editMode = true;
        }
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        if (this.editMode) {
          await axios.put(`http://localhost:3000/tasks/${this.task.id}`, this.task);
        } else {
          await axios.post('http://localhost:3000/tasks', this.task);
        }
        this.$emit('task-added');
        this.resetForm();
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          this.errors = error.response.data.errors; // Almacena los errores
        } else {
          console.error('Error submitting form:', error);
        }
      }
    },
    resetForm() {
      this.task = { id: null, titulo: '', descripcion: '', estado: false };
      this.editMode = false;
      this.errors = []; // Limpia los errores
    }
  }
};
</script>

<style scoped>
.task-form {
  width: 80vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  padding-left: 23%;
}

.task-form .form-group {
  margin-bottom: 15px;
}

.task-form label {
  display: block;
  margin-bottom: 5px;
}

.task-form input[type="text"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.task-form input[type="checkbox"] {
  margin-top: 10px;
}

.task-form button {
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}

.task-form button:hover {
  background-color: #218838;
}

.alert {
  margin-top: 20px;
}
</style>
