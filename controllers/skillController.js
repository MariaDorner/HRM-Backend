const {
  createSkill,

  updateSkill,
} = require("../db/operations/skillOperations");

exports.createSkill = async (req, res) => {
  console.log(req.body);
  const newSkill = await createSkill(req.body);
  res.status(201).json({
    status: "success",
    data: {
      skill: newSkill,
    },
  });
};

exports.updateSkill = async (req, res) => {
  const skill = await updateSkill(req.params.id, req.body);

  res.status(201).json({
    status: "success",
    data: { skill },
  });
};
