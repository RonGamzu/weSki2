const express = require('express');

const hotelsControllers = require('../controllers/hotels-controllers');

const router = express.Router();
router.post('/', hotelsControllers.searchHotels);

module.exports = router;
