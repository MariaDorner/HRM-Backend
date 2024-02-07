const { getFile, createFile } = require("../db/operations/file");

exports.createFile = async (req, res) => {
  const newFile = await createFile(req.file);

  res.status(201).json({
    status: "success",
    data: {
      file: newFile,
    },
  });
};
exports.getFile = async (req, res) => {
  const file = await getFile(req.params.id);
  if (file === null) return res.status(404).send();
  res.status(200).json({
    status: "sucess",
    data: { file },
  });
};
exports.previewFile = async (req, res) => {
  try {
    const file = await getFile(req.params.id);
    if (file === null) return res.status(404).send();
    console.log(file.path);
    res.sendFile(file.path, { root: "." });
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};
