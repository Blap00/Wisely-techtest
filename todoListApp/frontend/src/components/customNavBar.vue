<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a style="width: 25vw;" class="navbar-brand" href="#"><img width="41%" src="https://wisely.cl/wp-content/uploads/2024/04/Logo-wisely-illutrator_Mesa-de-trabajo-1-14-e1712084915797.png"></a>
    <a class="navbar-brand" href="#">To-Do List</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Sobre mi</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CustomNavbar',
};
</script>

<style scoped>
.navbar {
  margin-bottom: 20px;
}
</style>
