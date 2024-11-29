const express = require('express');
const { PORT } = require('./config/server.config');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');
const logger = require('./config/logger.config');
const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(PORT, async () => {
    logger.log({
        level: 'info',
        message: `Server Started at the Port - ${PORT}`
    })
})