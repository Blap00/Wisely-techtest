<p align="center">
  <a href="" rel="noopener">
 <img src="https://wisely.cl/wp-content/uploads/2024/04/Logo-wisely-illutrator_Mesa-de-trabajo-1-14-e1712084915797.png" alt="Logo" width="260" height="120" class="d-inline-block align-text-top">
</p>

<h3 align="center">To-do List APP</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> El proyecto abarca el examén técnico sobre un TO-DO LIST, esto basado en tecnologias como Node.js y Vue.js, el cual nos permite utilizar un CRUD para nuestro proyecto.
    <br> 
</p>

## 📝 Table of Contents

- [Acerca del Proyecto](#about)
- [Iniciando](#getting_started)
- [Deployment](#deployment)
- [Uso](#usage)
- [Construcción del proyecto](#built_using)
- [TO-DO](../TODO.md)
- [Contribuciones](../CONTRIBUTING.md)
- [Autores](#authors)

## 🧐 Acerca del Proyecto <a name = "about"></a>

Este proyecto, WiselyTechTest, tiene como objetivo proporcionar una aplicación de lista de tareas simple y efectiva que permita a los usuarios gestionar sus actividades diarias de manera organizada. Desarrollado con un enfoque en la simplicidad y la funcionalidad, esta aplicación utiliza Vue.js para el frontend, ofreciendo una interfaz de usuario interactiva y fácil de usar, y Node.js con Express para el backend, asegurando un manejo robusto y eficiente de los datos.

La aplicación permite a los usuarios crear, actualizar y eliminar tareas, además de marcar aquellas que ya han sido completadas. Con un diseño responsivo y una arquitectura de API RESTful, TodoListApp está construido para adaptarse a diversas necesidades, desde el uso personal hasta la integración en entornos de trabajo colaborativo. Esta combinación de tecnologías modernas y buenas prácticas de desarrollo garantiza una experiencia fluida y confiable para el usuario final.

## 🏁 Primeros Pasos <a name = "getting_started"></a>

Estas instrucciones te permitirán obtener una copia del proyecto y ejecutarlo en tu máquina local para propósitos de desarrollo y pruebas. Consulta la sección de [despliegue](#deployment) para obtener notas sobre cómo desplegar el proyecto en un sistema en vivo.

### Prerrequisitos

Asegúrate de tener instaladas las siguientes herramientas:

- [Node.js](https://nodejs.org/) (versión 20 o superior)
- [npm](https://www.npmjs.com/) (versión 10.5 o superior)
- [Vue CLI](https://cli.vuejs.org/) (instalado globalmente en versión 5.0 o superior)
- [SQLITE](https://www.sqlitetutorial.net/sqlite-nodejs/connect/) para la base de datos

### Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/Blap00/todoListApp.git
    cd todoListApp
    ```

2. Configura el Backend:

    1. Navega al directorio `backend`:

        ```bash
        cd backend
        ```

    2. Instala las dependencias necesarias:

        ```bash
        npm install
        ```

    3. Configura la base de datos SQLITE:

        - Configura la base de datos SQLITE segun el requerimiento.

    4. Ejecuta las migraciones para crear las tablas necesarias:

        ```bash
        npx sequelize-cli db:migrate
        ```

    5. Inicia el servidor:

        ```bash
        npm run start
        ```

3. Configura el Frontend:

    1. Navega al directorio `frontend`:

        ```bash
        cd ../frontend
        ```

    2. Instala las dependencias necesarias:

        ```bash
        npm install
        ```

    3. Inicia el servidor de desarrollo:

        ```bash
        npm run serve
        ```

### Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- **Backend**: Ubicado en el directorio `backend`, manejado por Express.js y Sequelize.
- **Frontend**: Ubicado en el directorio `frontend`, construido con Vue.js y Axios para manejar las solicitudes HTTP.

### Ejecución

Una vez completados los pasos anteriores, deberías poder acceder a la aplicación en tu navegador en la dirección `http://localhost:8080` para el frontend y `http://localhost:3000` para la API del backend.

¡Ya estás listo para comenzar a desarrollar y probar el proyecto!


## 🔧 Ejecutando los TEST <a name = "tests"></a>

El sistema ya contiene un archivo para probar el sistema, este se ejecuta desde el backend con npm test, el cual entrega valores de la ejecución, con pruebas y los errores ya documentados en el archivo bajo la ruta re test/task.test.js

### Ejecutamos los test de End to End 

Los test se ejecutan antes de ejecutar el programa back principal, pues estos verifican la integridad de la aplicación con sus solicitudes para realizar los CRUD, 

entregando un resultado de
```bash
> backend@1.0.0 test
> mocha

Executing (default): SELECT name FROM sqlite_master WHERE type='table' AND name='Tasks';


Executing (default): PRAGMA INDEX_LIST(`Tasks`)
Executing (default): SELECT `id`, `titulo`, `descripcion`, `estado`, `createdAt`, `updatedAt` FROM `Tasks` AS `Task`;
Server is running on port 3000
  ✔ Debe obtener las tareas como JSON
Executing (default): INSERT INTO `Tasks` (`id`,`titulo`,`descripcion`,`estado`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3,$4,$5);
  ✔ Debe crear una nueva tarea
Executing (default): SELECT `id`, `titulo`, `descripcion`, `estado`, `createdAt`, `updatedAt` FROM `Tasks` AS `Task` WHERE `Task`.`id` = '18';
Tarea obtenida: {
  id: 18,
  titulo: 'New Task',
  descripcion: 'Task description',
  estado: false,
  createdAt: '2024-07-30T21:22:06.291Z',
  updatedAt: '2024-07-30T21:22:06.291Z'
}
  ✔ Debe obtener una tarea por ID
Executing (default): SELECT `id`, `titulo`, `descripcion`, `estado`, `createdAt`, `updatedAt` FROM `Tasks` AS `Task` WHERE `Task`.`id` = '18';
Executing (default): UPDATE `Tasks` SET `titulo`=$1,`descripcion`=$2,`estado`=$3,`updatedAt`=$4 WHERE `id` = $5
  ✔ Debe actualizar una tarea existente
Executing (default): SELECT `id`, `titulo`, `descripcion`, `estado`, `createdAt`, `updatedAt` FROM `Tasks` AS `Task` WHERE `Task`.`id` = '18';
Executing (default): DELETE FROM `Tasks` WHERE `id` = 18
Executing (default): SELECT `id`, `titulo`, `descripcion`, `estado`, `createdAt`, `updatedAt` FROM `Tasks` AS `Task` WHERE `Task`.`id` = '18';
  1) Debería eliminar una tarea

  4 passing (120ms)
  1 failing

  1) Debería eliminar una tarea:
     Error: Error: expected 404 "Not Found", got 200 "OK"
      at C:\Users\56941\Dropbox\PC\Documents\GitHub\WiselyTechTest\todoListApp\backend\test\task.test.js:91:19
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async Context.<anonymous> (test\task.test.js:87:5)
```

## 🎈 Uso del sistema <a name="usage"></a>

Para usar el sistema, sigue estos pasos:

1. **Clona el Repositorio**:
   ```bash
   git clone https://github.com/Blap00/Wisely-techtest
    ```
2. Instala las Dependencias:
    Navega al directorio del proyecto y ejecuta:
    ```bash
    npm install
    ```
3. Ejecuta pruebas de sistemas:
    ```bash
    npm test
    ```
4. Inicia los servidores:
    - Navega al directorio del proyecto en backend y ejecuta:
    ```bash
    npm run start
    ```
    - En el directorio del Frontend ejecuta
    ```bash
    npm run serve
    ```

## ⛏️ Build fue realizada gracias a <a name = "built_using"></a>


- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Autores <a name = "authors"></a>

- [@Blap00](https://github.com/Blap00) - Desarrollador del sistema


## 🎉 Agradecimientos <a name = "acknowledgement"></a>

- Gracias a videos en YT de [@Midudev](https://www.youtube.com/@midudev)
- Proyecto inicial gracias a [Wisely](https://wisely.cl/)
