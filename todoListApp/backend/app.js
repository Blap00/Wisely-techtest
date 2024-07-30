const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors()); // Permite solicitudes desde cualquier origen
app.use(express.json());
app.use(taskRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => console.log(err));
