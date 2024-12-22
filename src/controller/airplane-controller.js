const { AirplaneService } = require('../services');
const { AirplaneRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const airplaneService = new AirplaneService(new AirplaneRepository());
const { SuccessResponse, ErrorResponse } = require('../utils');
async function createAirplane(req, res) {
    try {
        const response = await airplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.message = 'Successfully Created an Airplane';
        SuccessResponse.data = response;

        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = 'Something went wrong while creating an Airplane';
        ErrorResponse.error = error;
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}
async function getAirplanes(req, res) {
    // try {
    const response = await airplaneService.getAirplanes();
    SuccessResponse.message = 'Successfully fetched all the Airplanes';
    SuccessResponse.data = response;

    return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
    // } catch (error) {
    //     ErrorResponse.message = 'Can not fetch Airplanes';
    //     ErrorResponse.error = error;
    //     return res
    //         .status(StatusCodes.INTERNAL_SERVER_ERROR)
    //         .json(ErrorResponse);
    // }
}

module.exports = {
    createAirplane,
    getAirplanes
};