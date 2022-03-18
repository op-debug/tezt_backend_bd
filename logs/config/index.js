var appRoot = require('app-root-path');
var winston = require('winston');

const date  = new Date();
var day     = date.getDate();
var month   = date.getMonth();
var year    =  date.getFullYear();
var options = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/log/${day}-${month}-${year}.log`,
        handleExceptions: true,
        json: true,
        colorize: false,
    }
};

var logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file)
    ],
    exitOnError: false,
});


module.exports = logger;