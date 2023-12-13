const Work = require("../models/work");

const createWork = async function (data) {
  const newWork = await Work.create(data);
  return newWork;
};

const getWork = async function (data) {
  const id = parseInt(data);
  if (!id) return null;

  const work = await Work.findOne({ where: { id } });
  if (!work) return null;

  return work;
};

const updateWork = async function (data, body) {
  const id = parseInt(data);

  const updatedWork = await Work.update(body, { where: { id } });

  return updatedWork;
};

module.exports = {
  createWork,
  getAllWork,
  getWork,
  updateWork,
};
