const StatusCodes = require('http-status-codes');
const { ErrorResponse } = require("../utils");

function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber) {
        ErrorResponse.message = 'Something went wrong while creating airplane.';
        ErrorResponse.error = { explanation: 'modelNumber is not found in the Incoming Request' };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
};

module.exports = {
    validateCreateRequest
};