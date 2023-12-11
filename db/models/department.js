const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Department = sequelize.define("Department", {
  title: { type: DataTypes.STRING },
  status: { type: DataTypes.BOOLEAN },
});

module.exports = Department;
