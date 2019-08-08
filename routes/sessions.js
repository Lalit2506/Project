const router = require('express').Router();

const SessionsController = require('../Controllers/sessionsController');

// Begin routes

router.post('/authenticate', SessionsController.authenticate);
router.post('/logout', SessionsController.logout);

// End routes

module.exports = router;