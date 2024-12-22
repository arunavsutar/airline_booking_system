
class BaseError extends Error {
    constructor(name, statusCodes, description, details) {
        super(description);
        this.name = name;
        this.statusCodes = statusCodes;
        this.details = details;
    }
}

module.exports = BaseError;