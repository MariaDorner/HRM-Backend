const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Work = sequelize.define("Work", {
  title: { type: DataTypes.STRING },
  manager_name: { type: DataTypes.STRING },
  start_date: { type: DataTypes.DATEONLY },
  description: { type: DataTypes.STRING },
  is_current: { type: DataTypes.BOOLEAN },
});

module.exports = Work;
