<template>
  <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://wisely.cl/wp-content/uploads/2024/04/Logo-wisely-illutrator_Mesa-de-trabajo-1-14-e1712084915797.png" alt="Logo" width="120" height="40" class="d-inline-block align-text-top">
      To-do List
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">To-do List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'CustomNavbar',
};
</script>

<style scoped>
.navbar-brand{
  display:flex;
  align-items: center;
}
.navbar {
  margin-top: -9vh;
  margin-bottom: 20px;
}
</style>
