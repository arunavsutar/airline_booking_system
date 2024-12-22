const { StatusCodes } = require("http-status-codes");
const { BaseError } = require("sequelize");

class BadRequest extends BaseError {
    constructor(propertyName, details) {
        super("Bad-Request", StatusCodes.BAD_REQUEST, `Invalid Structure for ${propertyName} provided.`, details);
    }
}

module.exports = BadRequest;