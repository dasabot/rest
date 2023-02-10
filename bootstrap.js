//path
const nodePath = require("path");
global.APP_PATH = nodePath.resolve(__dirname);

/**@type {ILogger} */
const logger = new (require(APP_PATH + "/infrastructure/ConsoleLogger"))();

//env
try {
  const fs = require("fs");
  const envExp = /^(?<name>[^#][^[#=]*)\s*=\s*(?<value>[^=#]+).*$/;

  fs.readFileSync(APP_PATH + "/.env")
    .toString()
    .trim()
    .split("\n")
    .forEach((line) => {
      const matches = line.match(envExp);
      if (!matches) {
        return;
      }

      process.env[matches.groups.name.trim()] = matches.groups.value.trim();
    });
} catch (err) {
  logger.error(err)
  process.exit(1)
}

/**
 * @type {App}
 */
const app = new (require(APP_PATH + "/infrastructure/App"))(logger);

module.exports = app;
