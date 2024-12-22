const logger = require('../config/logger.config');
class AirplaneService {
    constructor(airplaneRepository) {
        this.airplaneRepository = airplaneRepository;
    }
    async createAirplane(data) {
        try {
            const response = await this.airplaneRepository.create(data);
            return response;
        } catch (error) {
            logger.log({
                level: 'error',
                message: `Error Occured - ${error}`
            });
            throw error;
        }
    }
    async deleteAirplane(id) {
        try {
            const response = await this.airplaneRepository.delete(id);
            return response;
        } catch (error) {
            logger.log({
                level: 'error',
                message: `Error Occured - ${error}`
            });
            throw error;
        }
    }
    async getAirplanes() {
        try {
            const response = await this.airplaneRepository.getAll();
            return response;
        } catch (error) {
            logger.log({
                level: 'error',
                message: `Error Occured - ${error}`
            });
            throw error;
        }
    }
}

module.exports = AirplaneService;