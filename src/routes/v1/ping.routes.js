const express = require('express');
const pingRouter = express();
const { pingRequest } = require('../../controller');
pingRouter.get('/', pingRequest);

module.exports = pingRouter;