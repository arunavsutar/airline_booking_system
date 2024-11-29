const winston = require('winston');
const allowedTransports = [];

const console = new winston.transports.Console({
    level: 'verbose',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log) => `${log.timestamp}[${log.level}]:${log.message}`)
    )
});

const file = new winston.transports.File({
    filename: './src/logs/errors.log',
    level: 'info'
});


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        //First argument = Time stamp of the execution
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        //This second arguments define what actually going to be printed
        winston.format.printf((log) => `${log.timestamp}[${log.level.toUpperCase()}]:${log.message}`)
    )
});

logger.add(console);
logger.add(file);


module.exports = logger;