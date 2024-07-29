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
<p>Instalamos la herramienta de Vue/Cli</p>
<code>npm install -g @vue/cli</code>
----
<p>Creamos lo correspondiente a FrontEnd</p>
<code>vue create frontend</code>
----
<p>Instalamos la dependencia con Axios necesaria</p>
<code>npm install axios</code>
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
<hr>
