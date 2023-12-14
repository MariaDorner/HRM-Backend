const Education = require("../models/education");

const createEducation = async function (data) {
  const newEducation = await Education.create(data);
  return newEducation;
};

const getAllEducation = async function () {
  const alleducation = await Education.findAll();
  return alleducation;
};
const getEducation = async function (data) {
  const id = parseInt(data);
  if (!id) return null;

  const education = await Education.findOne({ where: { id } });
  if (!education) return null;

  return education;
};

const updateEducation = async function (data, body) {
  const id = parseInt(data);

  const updatedEducation = await Education.update(body, { where: { id } });

  return updatedEducation;
};

module.exports = {
  createEducation,
  getAllEducation,
  getEducation,
  updateEducation,
};
