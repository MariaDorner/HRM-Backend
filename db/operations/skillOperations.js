const Skill = require("../models/skill");

const createSkill = async function (data) {
  const newSkill = await Skill.create(data);
  return newSkill;
};

const getSkills = async function () {
  const skills = await Skill.findAll();
  return skills;
};
const getSkill = async function (data) {
  const id = parseInt(data);
  if (!id) return null;

  const skill = await Skill.findOne({ where: { id } });
  if (!skill) return null;

  return skill;
};

const updateSkill = async function (data, body) {
  const id = parseInt(data);

  const updatedSkill = await Skill.update(body, { where: { id } });

  return updatedSkill;
};

module.exports = {
  createSkill,
  getSkills,
  getSkill,
  updateSkill,
};
