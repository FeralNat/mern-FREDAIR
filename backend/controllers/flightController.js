const asyncHandler = require( 'express-async-handler')

//@desc Get Flights
//@route GET /api/flights
//@access Private

const getFlights = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get flights'})
})

//@desc Set Flight
//@route POST /api/flights
//@access Private

const setFlight = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Set flight'})
})

//@desc Update Flight
//@route PUT /api/flights/:id
//@access Private

const updateFlight = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update flight ${req.params.id}`})
})

//@desc Delete Flights
//@route DELETE /api/flights/:id
//@access Private

const deleteFlight = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete flight ${req.params.id}`})
})

module.exports = {
    getFlights,
    setFlight,
    updateFlight,
    deleteFlight,


}