const { StatusCodes } = require("http-status-codes");
const { BaseError } = require("sequelize");

class NotFound extends BaseError {
    constructor(propertyName, details) {
        super("Not-Found", StatusCodes.NOT_FOUND, `The resource ${propertyName} Not found.`, details);
    }
}

module.exports = NotFound;