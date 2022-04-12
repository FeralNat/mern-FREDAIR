const express = require('express')
const router = express.Router()
const {
    getFlights,
    setFlight,
    updateFlight,
    deleteFlight,
    } = require('../controllers/flightController')

router.route('/').get(getFlights).post(setFlight)
router.route('/:id').delete(deleteFlight).put(updateFlight)

module.exports = router