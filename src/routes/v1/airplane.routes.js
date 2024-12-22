const { AirplaneController } = require('../../controller');
const express = require('express');
const router = express.Router();
const { airplaneMiddlewares } = require('../../middlewares')

router.post('/',
    airplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

router.get('/', AirplaneController.getAirplanes);
module.exports = router;