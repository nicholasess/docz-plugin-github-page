let fs = require("fs");
let { createPlugin } = require("docz-core");

module.exports = () =>
  createPlugin({
    onPostBuild: () => {
      fs.writeFileSync("./.docz/dist/_redirects", "/*    /index.html   200", {
        encoding: "utf8"
      });
    }
  });
