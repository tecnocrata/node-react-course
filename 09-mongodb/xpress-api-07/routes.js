"use strict";

function routes(app) {
  console.log("Starting routes...");
  app.use("/api/persons", require("./api/person"));
  app.use("/api/auth", require("./api/user"));
}

module.exports = routes;
