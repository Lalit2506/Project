const express = require('express');
const app = express();

const pagesRoutes = require('./routes/pages');
const tasksRoutes = require('./routes/tasks');
const subtasksRoutes = require('./routes/subTasks');
const authorsRoutes = require('./routes/authors');
const sessionsRoutes = require('./routes/sessions');

app.use('/', pagesRoutes);
app.use('/tasks', tasksRoutes);
app.use('/subTasks', subtasksRoutes);
app.use('/authors', authorsRoutes);
app.use('/', sessionsRoutes);

module.exports = app;