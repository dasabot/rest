const Router = require("./Router");
const urlParser = require("url");

class FrontController {
  /**
   * @param {Router} router
   */

  constructor(router) {
    /**
     * @type {Router}
     * @private
     */
    this._router = router;
  }

  async handle(req, res) {
    const urlInfo = urlParser.parse(req.url, true);
    // new (require("url").URL)(
    //   req.url,
    //   `http://${req.headers.host}`
    // );
    const sign = this._router.makeSign(req.method, urlInfo.pathname);

    let handler = this._router.resolve(sign) || this._router.resolve("default");
    if ("function" !== typeof handler) {
      res.writeHead(404);
      res.end("NOT FOUND");
      return;
    }

    req.urlInfo = urlInfo;
    let result = handler(req);

    if (result instanceof Promise) {
      result = await result;
    }
    const [status, data] = result;
    res.writeHead(status);
    res.end(JSON.stringify({ [status == 200 ? "data" : "message"]: data }));
  }
}

module.exports = FrontController;
