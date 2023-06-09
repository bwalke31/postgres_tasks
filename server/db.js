const { POSTGRES_PSWD } = require("./constants");
// Connnecting to our db
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: POSTGRES_PSWD,
  host: "localhost",
  port: 5432,
  database: "tododb",
});

module.exports = pool;
