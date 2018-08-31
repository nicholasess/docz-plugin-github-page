const fs = require("fs");
const directoryExists = require("directory-exists");
const mv = require("mv");
const { createPlugin } = require("docz-core");

const validAndMoveDir = () => {
  if (directoryExists.sync("docs")) {
    throw new Error(
      "Dir docs exists, please rename the dir with other name, because github page use docs to deploy website \n"
    );
  } else {
    mv(".docs/dist", "docs", { mkdirp: true }, function(err) {
      if (err) throw new Error(err);
    });
  }
};

module.exports = doczPluginGithubPage = () => {
  createPlugin({
    onPostBuild: () => validAndMoveDir()
  });
};
