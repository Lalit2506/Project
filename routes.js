const express = require('express');
const app = express();

const pagesRoutes = require('./routes/pages')
const tasksRoutes = require('./routes/tasks');
const authorsRoutes = require('./routes/authors');

app.use('/', pagesRoutes);
app.use('/tasks', tasksRoutes);
app.use('/authors', authorsRoutes);


module.exports = app;