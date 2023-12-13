const Department = require("../models/department");

const createDepartment = async function (data) {
  const newDepartment = await Department.create(data);
  return newDepartment;
};

const getDepartments = async function () {
  const departments = await Department.findAll();
  return departments;
};
const getDepartment = async function (data) {
  const id = parseInt(data);
  if (!id) return null;

  const department = await Department.findOne({ where: { id } });
  if (!department) return null;

  return department;
};

const updateDepartment = async function (data, body) {
  const id = parseInt(data);

  const updatedDepartment = await Department.update(body, { where: { id } });

  return updatedDepartment;
};

module.exports = {
  createDepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
};
