const Department = require("../models/department");

const createDepartment = async function (data) {
  const newDepartment = await Department.create(data);
  return newDepartment;
};

const updateDepartment = async function (data, body) {
  const id = parseInt(data);

  const updatedDepartment = await Department.update(body, { where: { id } });

  return updatedDepartment;
};

module.exports = {
  createDepartment,

  updateDepartment,
};
