const ILogger = require("./interfaces/ILogger");

/**
 * @implements {ILogger}
 */
class ConsoleLogger extends ILogger {
  error(...args) {
   console.error(...args)
  }
  info(...args) {
    console.info(...args)
  }
  warning(...args) {
    console.warn(...args)
  }
}

module.exports = ConsoleLogger;
