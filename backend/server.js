"use strict";

const Hapi = require("hapi");
const Boom = require("boom");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

const init = async () => {
  // Set some defaults (required if your JSON file is empty)
  // db.defaults({ posts: [], count: 0 }).write();
  
  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });

  server.route({
    method: "GET",
    path: "/",
    async handler(request) {
      try {
        const result = db
          .get("posts")
          .find({ id: 1 })
          .value();
        return result;
      } catch (err) {
        throw Boom.internal("Internal database error", err);
      }
    }
  });

  await server.start();
  console.log("Server running on %ss", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
