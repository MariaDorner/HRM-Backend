const {
  createDepartment,

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

exports.updateDepartment = async (req, res) => {
  const department = await updateDepartment(req.params.id, req.body);

  res.status(201).json({
    status: "success",
    data: { department },
  });
};
