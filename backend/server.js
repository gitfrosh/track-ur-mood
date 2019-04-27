"use strict";

const Hapi = require("hapi");
const Boom = require("boom");

const init = async () => {
  const dbOpts = {
    url: "mongodb://localhost:27017/test",
    settings: {
      poolSize: 10
    },
    decorate: true
  };

  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });

  await server.register({
    plugin: require("hapi-mongodb"),
    options: dbOpts
  });

  await server.start();
  console.log("Server running on %ss", server.info.uri);

  server.route({
    method: "GET",
    path: "/",
    async handler(request) {
      const db = request.mongo.db;
      const ObjectID = request.mongo.ObjectID;
      try {
        const result = await db.flugzeuge.find();
        console.log(result)
        return result;
      } catch (err) {
        throw Boom.internal("Internal MongoDB error", err);
      }
    }
  });
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
