const logger = require('../config/logger.config');
const NotFound = require('../errors/not-found');
class CrudRepository {
    constructor(Model) {
        this.model = Model;
    }
    async create(data) {
        const response = await this.model.create(data);
        return response;
    }
    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        return response;
    }
    async get(data) {
        try {

            const response = await this.model.findByPk(data);
            if (!response) {
                throw new NotFound(data, `The data with id:${data} not found in the db.`);
            }
            return response;
        }
        catch (error) {
            logger.log({
                level: 'error',
                message: `Error Occured - ${error}`
            });
            throw error;
        }
    }
    async getAll() {
        try {

            const response = await this.model.findAll();
            return response;
        } catch (error) {
            logger.log({
                level: 'error',
                message: `Error Occured - ${error}`
            });
            throw error;
        }
    }
    async update(id, data) {   //Passed datashould be an Object.
        const response = await this.model.update(data, {
            where: {
                id: id
            }
        });
    }
}

module.exports = CrudRepository;