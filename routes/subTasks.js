const router = require('express').Router();

const SubTasksController = require('../Controllers/subTaskController');

router.get('/', SubTasksController.index);
router.get('/:id', SubTasksController.show);
router.get('/:id/edit', SubTasksController.edit);
router.post('/', SubTasksController.create);
router.post('/update', SubTasksController.update);
router.post('/destroy', SubTasksController.destroy);

module.exports = router;