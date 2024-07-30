<template>
  <div>
    <h2>{{ editMode ? 'Editar Tarea' : 'Crear Tarea' }}</h2>
    <form @submit.prevent="submitForm" class="task-form">
      <div class="form-group">
        <label for="titulo">Título:</label>
        <input type="text" v-model="task.titulo" required />
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <input type="text" v-model="task.descripcion" />
      </div>
      <div class="form-group">
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
      editMode: false
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
        console.error('Error submitting form:', error);
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
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
}

.task-form .form-group {
  margin-bottom: 1rem;
}

.task-form label {
  display: block;
  margin-bottom: 0.5rem;
}

.task-form input[type="text"],
.task-form input[type="checkbox"] {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}

.task-form button {
  padding: 0.75rem 1.5rem;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
}

.task-form button:hover {
  background-color: #218838;
}

@media (min-width: 768px) {
  .task-form {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .task-form .form-group {
    flex: 1;
    min-width: calc(50% - 1rem);
    margin-right: 1rem;
  }

  .task-form .form-group:last-child {
    margin-right: 0;
  }

  .task-form button {
    align-self: flex-end;
  }
}
</style>
