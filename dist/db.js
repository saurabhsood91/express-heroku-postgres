"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

var DB_URL = process.env.DATABASE_URL;

var getClient = function getClient() {
  var client = new _pg.Client({
    connectionString: DB_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  return client;
};

var _default = getClient;
exports["default"] = _default;