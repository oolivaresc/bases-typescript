//Importación moderna
import winston, {format} from 'winston';
const {combine, timestamp, json} = format;

//Importación antigua
// const winston = require('winston');
// const {combine, timestamp, json} = winston.format;

export const logger = winston.createLogger({
    level: 'info',
    //format: winston.format.json(),
    format: combine(
        timestamp(),
        json(),
    ),
    //defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));

  //Moderna
export const buildLogger = (service: string) => {
  //Antigua
  //module.exports = buildLogger = (service) => {
    return {
        log: (message: string) => {
            logger.log('info', {message, service})
        },
        error: (message: string) => {
            logger.error('error', {
                message, 
                service,
               // at: new Date().toISOString()
            })
        }
    }
  }