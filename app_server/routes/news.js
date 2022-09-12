const express = require('express');
const router = express.Router();
const ctrlNews = require('../controllers/news');

/* about page */
router.get('/', ctrlNews.news);

module.exports = router;