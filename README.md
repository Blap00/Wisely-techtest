# WiselyTechTest
 
Iniciamos el proyecto creando una carpeta llamada "todoListApp"

----
<code>mkdir todoListApp</code>
----
<hr>
----
Iniciamos la estructura para nuestro proyecto segun solicita el PDF
----
<h3>Frontend</h3>
<br>
<p>Instalamos la herramienta de Vue/Cli</p>
<code>npm install -g @vue/cli</code>
<br>
----
<p>Creamos lo correspondiente a FrontEnd</p>
<code>vue create frontend</code>
<br>
----
<p>Instalamos la dependencia con Axios necesaria</p>
<code>npm install axios</code>
<br>
-----
<p>Dentro de frontend/src ejecutaremos comandos para la creacion de views y routes</p>
<code>
mkdir views
mkdir router
</code>
<p>Asi, lograremos crear los correspondiente archivos '.vue' y la ejecución de estos, en views guardaremos las vistas al usuario, tal como 'homeView' o 'aboutView' <br /> en components tendremos los componentes principales, que sera respecto a la Listas, al formulario de creación y por item individual. <br />Dentro de routes tendremos el correspondiente al index.vue, el cual tendra las rutas del mismo </p>
<hr>
<p>Crearemos los distintos archivos correspondientes, podemos realizarlo de la manera tradicional o con codigos</p>
<code>
type nul > components/customNavBar.vue
</code>

<code>
type nul > components/ListaTareas.vue
type nul > components/FormsTareas.vue
type nul > components/ItemTarea.vue
</code>

<code>
type nul > views/HomeView.vue
type nul > views/AboutView.vue
</code>

<code>
type nul > router/index.js
</code>

<hr>
<p>Para solucionar el tipico problema de las cors utilizaremos una herramienta de cors para solucionarla y habilitar el uso entre la api y el frontend</p>
<p>Esta herramienta de cors la instalaremos dentro de backend</p>


<hr>
<h3>Backend</h3>
<p>Instalamos la herramientas necesarias</p>
<code>npm install express sequelize pg pg-hstore dotenv</code>
<p>Luego configuramos tanto las distintas carpetas del proyecto</p>
<code>mkdir backend</code>
<code>
cd backend
mkdir controllers models routes config
</code>
<p>Creamos los archivos necesarios para el proyecto mediante el codigo</p>
<code>
type nul > app.js
type nul > config\database.js
type nul > models\task.js
type nul > controllers\taskController.js
type nul > routes\taskRoutes.js
</code>
<p>Tambien configuraremos lo correspondiente a la config de Database</p>
<p>Luego de configurar la base de datos, configuramos el controlador, los modelosy las rutas</p>

<h4>No te olvides de ejecutar el servició desde la raiz del proyecto con: </h4>
<code>node backend/app.js</code>
<p>Esta ejecutara el servicio de la API desde el puerto 3000, puedes acceder de manera local en <a type="__blank" href="http://localhost:3000">Localhost</a>, siempre y cuando no se modificara antes</p>
<hr>
