import Pino, { Logger } from 'pino';
import { LoggerOptions, destination } from 'pino';
// import { trace, context } from '@opentelemetry/api';

export const loggerOptions: LoggerOptions = {
  level: 'info',
};

export const logger: Logger = Pino(
  loggerOptions,
  destination(process.env.LOG_FILE_NAME),
);
