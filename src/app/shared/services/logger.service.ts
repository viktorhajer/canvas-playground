import {Injectable} from '@angular/core';
import {Logger, LogLevel, LogMessage} from '../models/logger.model';

const MAXIMUM_NUMBER_OF_LOGS = 500;

@Injectable({providedIn: 'root'})
export class LoggerService {

  logMessages: LogMessage[] = [];

  clearLogs() {
    this.logMessages = [];
  }

  info(message: string, context: string) {
    this.createAndLogMessage(message, LogLevel.INFO, context);
  }

  warning(message: string, context: string) {
    this.createAndLogMessage(message, LogLevel.WARNING, context);
  }

  error(message: string, context: string) {
    this.createAndLogMessage(message, LogLevel.ERROR, context);
  }

  statistics(message: string, context: string) {
    this.createAndLogMessage(message, LogLevel.STATISTICS, context);
  }

  private createAndLogMessage(message: string, level: LogLevel, context: string) {
    this.logMessages.push(new LogMessage(new Date().getTime(), message, level, context));

    // Remove the earliest 10% of the messages if we reached the specified border
    if(this.logMessages.length > MAXIMUM_NUMBER_OF_LOGS) {
      this.logMessages = this.logMessages.slice((MAXIMUM_NUMBER_OF_LOGS / 10));
    }
  }
}

@Injectable({providedIn: 'root'})
export class LoggerFactory {

  constructor(private loggerService: LoggerService) {
  }

  create(classname: string): Logger {
    return new Logger(this.loggerService, classname);
  }
}
