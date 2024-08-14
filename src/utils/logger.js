import winston from 'winston';
import 'winston-mongodb';

import dotenv from 'dotenv';
import checkEnv from '../utils/CheckEnv.js';

// Load environment variables

dotenv.config({
    path: "./.env"
})
checkEnv();

console.log('Connecting to MongoDB at:', process.env.MONGO_URI);

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.MongoDB({
      db: process.env.MONGO_URI,
      collection: 'logs',
      level: 'error',
      options: { useUnifiedTopology: true },
    }),
  ],
});

export default logger;
