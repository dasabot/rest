class StringController {
  static async searchSubstring(req) {
    const params = req.urlInfo.query;
    const string = params.string;
    const substring = params.search;
    return [200, string.indexOf(substring)];
  }

  static async reverse(req) {
    const string = req.urlInfo.query.value;
    return [200, string.split("").reverse().join("")];
  }
}

module.exports = StringController;
