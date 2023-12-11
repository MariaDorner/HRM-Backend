const sequelize = require("./connection");
const Department = require("./models/department");
const Work = require("./models/work");
const User = require("./models/user");
const Skill = require("./models/skill");
const Education = require("./models/education");

const init = async function () {
  Work.belongsTo(Department);
  Department.hasMany(Work);
  User.belongsToMany(Work, { through: "UserWork" });
  Work.belongsToMany(User, { through: "UserWork" });
  User.belongsToMany(Skill, { through: "UserSkill" });
  Skill.belongsToMany(User, { through: "UserSkill" });
  Education.belongsTo(User);
  User.hasMany(Education);
  await sequelize.sync({ force: false });
  console.log("All models were synchronized successfully.");
};
module.exports = { init };
