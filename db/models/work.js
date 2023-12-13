const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Work = sequelize.define("Work", {
  title: { type: DataTypes.STRING },
  managername: { type: DataTypes.STRING },
  startdate: { type: DataTypes.DATEONLY },
  description: { type: DataTypes.STRING },
  iscurrent: { type: DataTypes.BOOLEAN },
});

module.exports = Work;
