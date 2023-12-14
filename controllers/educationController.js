const {
  createEducation,

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

exports.updateEducation = async (req, res) => {
  const education = await updateEducation(req.params.id, req.body);

  res.status(201).json({
    status: "success",
    data: { education },
  });
};
