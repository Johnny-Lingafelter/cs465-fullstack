const express = require('express');
const router = express.Router();
const ctrlAbout = require('../controllers/about');

/* about page */
router.get('/', ctrlAbout.about);

module.exports = router;