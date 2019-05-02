"use strict";

const Hapi = require("hapi");
const Boom = require("boom");
const uuidv1 = require("uuid/v1");
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
    config: {
      cors: true
    },
    method: "GET",
    path: "/moods/",
    async handler(request) {
      try {
        const result = db
          .get("posts")
          .find({ id: 1 })
          .value();
        console.log('result', result)  
        return result.mood;
      } catch (err) {
        throw Boom.internal("Internal database error", err);
      }
    }
  });

  server.route({
    config: {
      cors: true
    },
    method: "GET",
    path: "/mood/{date}",
    async handler(request) {
      try {
        var reply;
        const requestedDate = request.params.date;
        console.log(requestedDate);
        const result = db
          .get("posts")
          .find({ date: requestedDate })
          .value();
          console.log('result', result)  

        if (!result) {
          reply = 0;
        } else {
          reply = result.mood;
        }
        console.log(reply);
        return reply;
      } catch (err) {
        throw Boom.internal("Internal database error", err);
      }
    }
  });

  server.route({
    config: {
      cors: true
    },
    method: "POST",
    path: "/moods/",
    async handler(request, reply) {
      console.log(request.payload)
      try {
        const date = request.payload.date;
        const mood = request.payload.mood;
        console.log(`new date: ${date} .. new mood: ${mood}`)
        const result = db
          .get("posts")
          .push({ id: uuidv1(), date: date, mood: mood })
          .write();
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
