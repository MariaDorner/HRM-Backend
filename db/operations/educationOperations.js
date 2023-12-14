const Education = require("../models/education");

const createEducation = async function (data) {
  const newEducation = await Education.create(data);
  return newEducation;
};

const updateEducation = async function (data, body) {
  const id = parseInt(data);

  const updatedEducation = await Education.update(body, { where: { id } });

  return updatedEducation;
};

module.exports = {
  createEducation,
  updateEducation,
};
