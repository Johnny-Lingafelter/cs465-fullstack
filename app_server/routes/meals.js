const express = require('express');
const router = express.Router();
const ctrlMeals = require('../controllers/meals');

/* about page */
router.get('/', ctrlMeals.meals);

module.exports = router;