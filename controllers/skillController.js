const {
  createSkill,
  getSkills,
  getSkill,
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
exports.getSkills = async (req, res) => {
  const skills = await getSkills();

  res.status(200).json({
    status: "success",
    data: {
      skills,
    },
  });
};
exports.getSkill = async (req, res) => {
  const skill = await getSkill(req.params.id);
  if (skill === null) return res.status(404).send();
  res.status(200).json({
    status: "sucess",
    data: { skill },
  });
};

exports.updateSkill = async (req, res) => {
  const skill = await updateSkill(req.params.id, req.body);

  res.status(201).json({
    status: "success",
    data: { skill },
  });
};
