const {
  createWork,

  updateWork,
} = require("../db/operations/workOperations");

exports.createWork = async (req, res) => {
  const newWork = await createWork(req.body);

  res.status(201).json({
    status: "success",
    data: {
      work: newWork,
    },
  });
};

exports.updateWork = async (req, res) => {
  const work = await updateWork(req.params.id, req.body);
  console.log(req.body);
  res.status(201).json({
    status: "success",
    data: { work },
  });
};
