import { LoggerService } from '../services/logger.service';

/* tslint:disable */

export enum LogLevel {
  INFO,
  WARNING,
  ERROR,
  STATISTICS
}

// CLASSES

export class LogMessage {
  constructor(public timestamp: number, public message: string, public level: LogLevel, public context: string) {
  }
}

export class Logger {

  constructor(public service: LoggerService, public classname: string) {
  }

  clearLogs() {
    this.service.clearLogs();
  }

  logHighlighted(message: string, context?: string) {
    console.info(`%c${this.formatContext(context)}: ${message}`, 'color: #3CB371; font-size: medium');
    this.service.info(message, this.formatContext(context));
  }

  logEvent(message: string, context: string, eventTarget?: any) {
    console.groupCollapsed(`%c${context}`, 'color: #483D8B; font-weight: bold;');
    console.info(`%c${this.formatContext(null)}: ${message}`, 'color: #483D8B; font-weight: bold');
    if (eventTarget) {
      console.dir(eventTarget);
    }
    console.groupEnd();
    this.service.info(message, this.formatContext(null));
  }

  logInfo(message: string, context?: string) {
    console.info(this.formatContext(context) + ': ' + message);
    this.service.info(message, this.formatContext(context));
  }

  logWarning(message: string, context?: string) {
    console.warn(this.formatContext(context) + ': ' + message);
    this.service.warning(message, this.formatContext(context));
  }

  logError(message: string, context?: string, error?: any) {
    console.groupCollapsed(`%c${this.formatContext(context)}: ${message}`, 'color: red; font-weight: bold;');
    if (error) {
      console.dir(error);
    }
    console.groupEnd();
    this.service.error(message, this.formatContext(context));
  }

  logStatistics(message: string, context?: string) {
    this.service.statistics(message, this.formatContext(context));
  }

  private formatContext(context?: string): string {
    return this.classname + (context ? '.' + context : '');
  }
}
