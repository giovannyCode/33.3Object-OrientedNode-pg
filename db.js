const { Client } = require("pg");

let database;

if (process.env.NODE_ENV === "test") {
  database = "lunchly_test";
} else {
  database = "lunchly";
}

let db = new Client({
  /// connectionString: DB_URI,
  user: "postgres",
  password: "postgres",
  database: database,
});

db.connect();

module.exports = db;
