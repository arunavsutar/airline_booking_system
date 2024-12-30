const { AirplaneController } = require('../../controller');
const express = require('express');
const router = express.Router();
const { airplaneMiddlewares } = require('../../middlewares')

router.post('/',
    airplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);
router.get('/', AirplaneController.getAirplanes);
router.get('/:id', AirplaneController.getAirplane);
router.delete('/:id', AirplaneController.destroyAirplane);
router.patch('/:id', AirplaneController.updateAirplane);
module.exports = router;