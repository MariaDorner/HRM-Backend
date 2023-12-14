const {
  createEducation,
  getAllEducation,
  getEducation,
  updateEducation,
} = require("../db/operations/educationOperations");

exports.createEducation = async (req, res) => {
  const newEducation = await createEducation(req.body);
  res.status(201).json({
    status: "success",
    data: {
      education: newEducation,
    },
  });
};
exports.getAllEducation = async (req, res) => {
  const departments = await getAllEducation();

  res.status(200).json({
    status: "success",
    data: {
      departments,
    },
  });
};
exports.getEducation = async (req, res) => {
  const education = await getEducation(req.params.id);
  if (education === null) return res.status(404).send();
  res.status(200).json({
    status: "sucess",
    data: { education },
  });
};

exports.updateEducation = async (req, res) => {
  const education = await updateEducation(req.params.id, req.body);

  res.status(201).json({
    status: "success",
    data: { education },
  });
};
