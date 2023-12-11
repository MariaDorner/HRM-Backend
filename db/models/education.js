const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Education = sequelize.define("Education", {
  name: { type: DataTypes.STRING },
  duration: { type: DataTypes.INTEGER },
  description: { type: DataTypes.STRING },
});

module.exports = Education;
