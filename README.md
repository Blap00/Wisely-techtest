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


## 🔧 Running the tests <a name = "tests"></a>

Explain how to run the automated tests for this system.

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## 🎈 Usage <a name="usage"></a>

Add notes about how to use the system.

## 🚀 Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@kylelobo](https://github.com/kylelobo) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
