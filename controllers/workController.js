const {
  createWork,
  getAllWork,
  getWork,
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
exports.getAllWork = async (req, res) => {
  const allWork = await getAllWork();

  res.status(200).json({
    status: "success",
    data: {
      allWork,
    },
  });
};
exports.getWork = async (req, res) => {
  const work = await getWork(req.params.id);
  if (work === null) return res.status(404).send();
  res.status(200).json({
    status: "sucess",
    data: { work },
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
