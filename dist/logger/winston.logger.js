"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.winstonLogger = void 0;
const winston = require("winston");
const nestLikeLevels = {
    error: 0,
    warn: 1,
    log: 2,
    debug: 3,
    verbose: 4,
};
exports.winstonLogger = winston.createLogger({
    levels: nestLikeLevels,
    level: 'debug',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize(), winston.format.timestamp(), winston.format.printf(({ level, message, timestamp }) => `[${timestamp}] ${level}: ${message}`)),
        }),
        new winston.transports.File({
            filename: 'application.log',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        }),
    ],
});
//# sourceMappingURL=winston.logger.js.map