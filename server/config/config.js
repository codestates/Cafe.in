require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DATABASE_USER_NAME,
    password: process.env.DATABASE_USER_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: "localhost",
    dialect: "mysql",
  },
  test: {
    username: process.env.DATABASE_USER_NAME,
    password: process.env.DATABASE_USER_PASSWORD,
    database: process.env.DB_DATABASE_NAMENAME,
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    username: process.env.DATABASE_USER_NAME,
    password: process.env.DATABASE_USER_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: "localhost",
    dialect: "mysql",
  },
};
