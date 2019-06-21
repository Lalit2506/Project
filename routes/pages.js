const router = require('express').Router();

// Our controllers
const PagesController = require('../controllers/pagesController');

// Create our routes
router.get(`/`, PagesController.show);
<<<<<<< Updated upstream
router.get(`/home`, PagesController.show);
router.get(`/about`, PagesController.show);
router.get(`/contact`, PagesController.show);
=======
router.get(`/About`, PagesController.show);
router.get(`/Contact`, PagesController.show);
>>>>>>> Stashed changes

module.exports = router;