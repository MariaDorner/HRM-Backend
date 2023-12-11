const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Skill = sequelize.define("Skill", {
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
});

module.exports = Skill;
