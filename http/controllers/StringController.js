class StringController {
  static async searchSubstring(req) {
    const params = req.urlInfo.query;
    if (!("string" in params) || !("search" in params)) {
      return [400, "Request parameters not found"];
    }
    const string = params.string;
    const substring = params.search;
    const searchResult = string.indexOf(substring);
    if (searchResult > 0) {
      return [200, searchResult];
    } else {
      return [400, "Substring not found"];
    }
  }

  static async reverse(req) {
    const query = req.urlInfo.query;
    if (!("value" in query)) {
      return [400, "Request parameters not found"];
    }
    const string = req.urlInfo.query.value;
    return [200, string.split("").reverse().join("")];
  }
}

module.exports = StringController;
