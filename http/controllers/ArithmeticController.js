class ArithmeticController {
  static async sum(req) {
    const params = req.urlInfo.query;
    if (!("a" in params) || !("b" in params)) {
      return [400, "Request parameters not found"];
    }
    const a = +params.a;
    const b = +params.b;
    if (isNaN(a) || isNaN(b)) {
      return [400, "Request params must be numbers"];
    }
    return [200, a + b];
  }
}

module.exports = ArithmeticController;
