const File = require("../models/file");

const createFile = async function (data) {
  const newFile = await File.create(data);
  return newFile;
};

const getFile = async function (data) {
  const id = parseInt(data);
  if (!id) return null;

  const file = await File.findOne({ where: { id } });
  if (!file) return null;

  return file;
};

module.exports = { createFile, getFile };
