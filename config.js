const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

module.exports = {
  database: {
    name: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
  },
  clientUrl: process.env.CLIENT_URL,
};
