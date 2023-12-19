const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const User = sequelize.define("User", {
  firstname: { type: DataTypes.STRING },
  lastname: { type: DataTypes.STRING },
  birthdata: { type: DataTypes.DATEONLY },
  phone1: { type: DataTypes.STRING },
  phone2: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  profileImage: { type: DataTypes.STRING },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = User;
