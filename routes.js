const express = require('express');
const app = express();

const pagesRoutes = require('./routes/pages')
const tasksRoutes = require('./routes/tasks');

app.use('/', pagesRoutes);
app.use('/tasks', tasksRoutes);


module.exports = app;