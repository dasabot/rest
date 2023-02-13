class WelcomeController {
  static async home(req, res) {
    let pageContent = await require("fs").promises.readFile(
      APP_PATH + "/views/welcome.html"
    );
    pageContent = pageContent.toString().trim();

    return [200, "welcome"];
  }

  static notFound() {
    return [404, "404"];
  }
}

module.exports = WelcomeController;
