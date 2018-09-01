const fs = require("fs");
const directoryExists = require("directory-exists");
const { createPlugin } = require("docz-core");
const moveFile = require("./moveFile");

const removeAndMove = () => {
  moveFile(".docz/dist", "docs", function(err) {
    if (err) throw new Error(err);
  });
};

const logicPlugin = () => {
  if (fs.existsSync("docs")) {
    throw new Error(
      "Dir docs exists, please remove or rename the dir with other name , because github page use docs to deploy website \n"
    );
  } else {
    removeAndMove();
  }
};

module.exports = () =>
  process.env.TEST
    ? logicPlugin()
    : createPlugin({
        onPostBuild: () => logicPlugin()
      });
