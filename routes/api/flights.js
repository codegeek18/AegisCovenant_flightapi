const express = require('express');
const router = express.Router();
const flightsController = require('../../controller/flightsController');

router.route('/')
    .post(flightsController.searchFlights)

module.exports = router