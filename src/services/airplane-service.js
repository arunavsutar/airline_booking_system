const logger = require('../config/logger.config');
const NotFound = require('../errors/not-found');
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
    async getAirplane(id) {
        try {
            const response = await this.airplaneRepository.get(id);
            return response;
        } catch (error) {
            logger.log({
                level: 'error',
                message: `Error Occured - ${error}`
            });
            throw error;
        }
    }
    async destroyAirplane(id) {
        try {
            const response = await this.airplaneRepository.destroy(id);
            if (!response) {
                throw new NotFound(id, `This ${id} is not found in the db`);
            }
            return response;
        } catch (error) {
            logger.log({
                level: 'error',
                message: `Error Occured - ${error}`
            });
            throw error;
        }
    }
    async updateAirplane(id,data){
        try{
            const response = await this.airplaneRepository.update(id);
            if (!response) {
                throw new NotFound(id, `This ${id} is not found in the db`);
            }
            return response;
        }
        catch(error){
            logger.log({
                level: 'error',
                message: `Error Occured - ${error}`
            });
            throw error;
        }
    }
}

module.exports = AirplaneService;