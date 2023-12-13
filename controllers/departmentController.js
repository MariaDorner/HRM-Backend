const {
  createDepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
} = require("../db/operations/departmentOperations");

exports.createDepartment = async (req, res) => {
  const newDepartment = await createDepartment(req.body);
  res.status(201).json({
    status: "success",
    data: {
      department: newDepartment,
    },
  });
};
exports.getDepartments = async (req, res) => {
  const departments = await getDepartments();

  res.status(200).json({
    status: "success",
    data: {
      departments,
    },
  });
};
exports.getDepartment = async (req, res) => {
  const department = await getDepartment(req.params.id);
  if (department === null) return res.status(404).send();
  res.status(200).json({
    status: "sucess",
    data: { department },
  });
};

exports.updateDepartment = async (req, res) => {
  const department = await updateDepartment(req.params.id, req.body);

  res.status(201).json({
    status: "success",
    data: { department },
  });
};
