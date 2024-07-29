const express = require('express');
const sequelize = require('./config/database');
const Task = require('./models/task');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());
app.use('/tasks', taskRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => console.log(err));
