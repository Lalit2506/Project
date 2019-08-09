const router = require('express').Router();

const TasksController = require('../Controllers/TasksController');

// Begin routes

router.get('/', TasksController.index);
//router.get('/ongoing', TasksController.ongoing);
//router.get('/finished', TasksController.finished);
router.get('/:id', TasksController.show);
router.get('/:id/edit', TasksController.edit);
router.post('/', TasksController.create);
router.post('/update', TasksController.update);
router.post('/destroy', TasksController.destroy);

// End routes

module.exports = router;