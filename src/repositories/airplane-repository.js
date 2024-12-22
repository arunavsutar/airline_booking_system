const CrudRepository = require('./crud-repository');
const Sequelize = require('sequelize');
const db = require('../models');
const Airplane = require('../models/airplane')(db.sequelize, Sequelize.DataTypes,
    Sequelize.Model);
class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }

    //All the queries present in crud will be accessed here
    //if you want to add some aditional queries you can add here.
    // async someQuery(data){

    // }
}

module.exports = AirplaneRepository;