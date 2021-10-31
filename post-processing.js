const critical = require("critical");

critical.generate({
  base: "docs/",
  src: "index.html",
  target: {
    html: "index-critical.html",
    css: "critical.css",
  },
  width: 1300,
  height: 900,
});
