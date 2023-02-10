/**
 * @type {app}
 */

const app = require("./bootstrap");

try {
  app
  .init()
  .boot()
  .start();
} catch (err) {
  app.get('logger').error(err);
}
