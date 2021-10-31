const htmlMinifier = require("html-minifier");

module.exports = function (config) {
  config.addPassthroughCopy("assets");

  config.addTransform("htmlmin", async function (content, contentPath) {
    if (!contentPath || !contentPath.endsWith(".html")) {
      return content;
    }

    return htmlMinifier.minify(content, {
      collapseWhitespace: true,
      removeTagWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
    });
  });
};
