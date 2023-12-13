const Skill = require("../models/skill");

const createSkill = async function (data) {
  const newSkill = await Skill.create(data);
  return newSkill;
};

const updateSkill = async function (data, body) {
  const id = parseInt(data);

  const updatedSkill = await Skill.update(body, { where: { id } });

  return updatedSkill;
};

module.exports = {
  createSkill,

  updateSkill,
};
