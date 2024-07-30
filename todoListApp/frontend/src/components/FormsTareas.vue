<template>
  <div>
    <h2>{{ editMode ? 'Editar Tarea' : 'Crear Tarea' }}</h2>
    <form @submit.prevent="submitForm" class="task-form row">
      <div class="form-group col-12 col-md-5">
        <label for="titulo">Título:</label>
        <input type="text" v-model="task.titulo" required class="form-control" />
      </div>
      <div class="form-group col-12 col-md-5">
        <label for="descripcion">Descripción:</label>
        <input type="text" v-model="task.descripcion" class="form-control" />
      </div>
      <div class="form-group col-12 col-md-2">
        <label for="estado">Estado:</label>
        <input type="checkbox" v-model="task.estado" class="form-check-input" />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary mt-2">{{ editMode ? 'Actualizar' : 'Agregar' }}</button>
      </div>
    </form>

    <!-- Mensaje de error de Bootstrap -->
    <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
      {{ errorMessage }}
    </div>
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
      errorMessage: '' // Para almacenar el mensaje de error
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
        this.errorMessage = ''; // Limpiar el mensaje de error al enviar correctamente
      } catch (error) {
        console.log(error.request.response)
        console.error('Error submitting form:', error);
        this.errorMessage = error.response ? error.response.data.error : 'Error submitting form'; // Configurar el mensaje de error
      }
    },
    resetForm() {
      this.task = { id: null, titulo: '', descripcion: '', estado: false };
      this.editMode = false;
    }
  }
};
</script>

<style scoped>
.task-form {
  margin-top: 20px;
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
</style>
