import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import './assets/styles.css';  // Asegúrate de tener tus estilos globales si los tienes
import 'bootstrap/dist/css/bootstrap.min.css';
// Crea la instancia de la aplicación
const app = createApp(App);

// Usa el router
app.use(router);

// Monta la aplicación
app.mount('#app');
