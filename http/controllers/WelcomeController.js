class WelcomeController {
  static async home(req, res) {
    // let pageContent = await require('fs').promises.readFile(APP_PATH + '/views/welcome.html')
    // pageContent = pageContent.toString().trim()

    const responseBody = { message: "welcome" };
    res.writeHead(200);
    res.end(JSON.stringify(responseBody));
  }

  static notFound(req, res) {
    res.writeHead(404);
    res.end("404");
  }
}

module.exports = WelcomeController;
