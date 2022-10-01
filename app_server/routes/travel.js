const express = require('express');
const router = express.Router();
const ctrlTravel = require('../controllers/travel');

/* travel page */
router.get('/', ctrlTravel.travelList);

module.exports = router;