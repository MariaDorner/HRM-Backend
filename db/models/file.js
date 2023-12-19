const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const File = sequelize.define("File", {
  filename: { type: DataTypes.STRING },
  originalname: { type: DataTypes.STRING },
  mimetype: { type: DataTypes.STRING },
  path: { type: DataTypes.STRING },
  size: { type: DataTypes.INTEGER },
});

module.exports = File;
