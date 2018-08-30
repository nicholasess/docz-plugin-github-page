let fs = require("fs");
let { createPlugin } = require("docz-core");

module.exports = () =>
  createPlugin({
    onPostBuild: () => {
      fs.writeFile(
        "./.docz/dist/_redirects",
        "/*    /index.html   200",
        function(err) {
          if (err) {
            return console.log(err);
          }

          console.log("The file was saved!");
        }
      );
    }
  });
