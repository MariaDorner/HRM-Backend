const Work = require("../models/work");

const createWork = async function (data) {
  const newWork = await Work.create(data);
  return newWork;
};

const updateWork = async function (data, body) {
  const id = parseInt(data);

  const updatedWork = await Work.update(body, { where: { id } });

  return updatedWork;
};

module.exports = {
  createWork,

  updateWork,
};
