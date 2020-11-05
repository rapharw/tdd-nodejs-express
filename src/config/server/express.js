const express = require("express");
const consign = require("consign");

module.exports = function () {

  const app = express();
    
  consign({
    cwd: "src",
    locale: "pt-br",
  })
    .into(app);

  return app;
};
