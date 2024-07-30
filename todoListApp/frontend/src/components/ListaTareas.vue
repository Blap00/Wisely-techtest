<template>
  <div>
    <h1>Lista de Tareas</h1>
    <table class="tasks-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Descripción</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.id }}</td>
          <td>{{ task.titulo }}</td>
          <td>{{ task.descripcion }}</td>
          <td>{{ task.estado ? 'Completado' : 'Pendiente' }}</td>
          <td>
            <button @click="$emit('edit-task', task)">Editar</button>
            <button @click="$emit('delete-task', task.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array
  }
};
</script>

<style scoped>
.tasks-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.tasks-table th,
.tasks-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.tasks-table th {
  background-color: #f4f4f4;
  color: #333;
}

.tasks-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.tasks-table tr:hover {
  background-color: #f1f1f1;
}

.tasks-table button {
  margin-right: 5px;
}
</style>
