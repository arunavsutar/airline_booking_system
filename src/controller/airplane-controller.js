const { AirplaneService } = require('../services');
const { AirplaneRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const airplaneService = new AirplaneService(new AirplaneRepository());
const { SuccessResponse, ErrorResponse } = require('../utils');
const { log } = require('winston');
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
    try {
        const response = await airplaneService.getAirplanes();
        SuccessResponse.message = 'Successfully fetched all the Airplanes';
        SuccessResponse.data = response;

        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = 'Can not fetch Airplanes';
        ErrorResponse.error = error;
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}
async function getAirplane(req, res) {
    try {
        const response = await airplaneService.getAirplane(req.params.id);
        SuccessResponse.message = `Successfully fetched  the Airplane with id : ${req.params.id}`;
        SuccessResponse.data = response;

        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        console.log("ERROR - \n", error);

        ErrorResponse.message = error.details;
        ErrorResponse.error = error;
        return res
            .status(StatusCodes.NOT_FOUND)
            .json(ErrorResponse);
    }
}
async function destroyAirplane(req, res) {
    try {
        const response = await airplaneService.destroyAirplane(req.params.id);
        SuccessResponse.message = `Successfully deleted  the Airplane with id : ${req.params.id}`;
        SuccessResponse.data = response;

        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        console.log("ERROR - \n", error);

        ErrorResponse.message = error.details;
        ErrorResponse.error = error;
        return res
            .status(StatusCodes.NOT_FOUND)
            .json(ErrorResponse);
    }
}
async function updateAirplane(req, res) {
    try {
        const response = await airplaneService.updateAirplane(req.params.id, req.body);
        SuccessResponse.message = `Successfully updated  the Airplane with id : ${req.params.id}`;
        SuccessResponse.data = response;

        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        console.log("ERROR - \n", error);

        ErrorResponse.message = error.details;
        ErrorResponse.error = error;
        return res
            .status(StatusCodes.NOT_FOUND)
            .json(ErrorResponse);
    }
}


module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane,
};