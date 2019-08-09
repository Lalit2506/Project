const router = require('express').Router();

const AuthorsController = require('../Controllers/authorsController');

// Begin routes

router.post('/', AuthorsController.create);

// End routes

module.exports = router;