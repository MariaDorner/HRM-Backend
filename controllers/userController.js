const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../db/operations/userOperations");

exports.createUser = async (req, res) => {
  try {
    const profileImage = req.file;

    const userData = req.body;
    const newUser = await createUser(userData, profileImage);

    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    console.error("Error in createUser controller:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
exports.getUsers = async (req, res) => {
  const users = await getUsers();

  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
};
exports.getUser = async (req, res) => {
  const user = await getUser(req.params.id, {
    withWork: true,
    withSkills: true,
    withEducation: true,
  });
  if (user === null) return res.status(404).send();
  res.status(200).json({
    status: "sucess",
    data: { user },
  });
};

exports.updateUser = async (req, res) => {
  const user = await updateUser(req.params.id, req.body);

  res.status(201).json({
    status: "success",
    data: { user },
  });
};
exports.deleteUser = async (req, res) => {
  deleteUser(req.params.id);
  res.status(200).json({
    status: "success",
    data: null,
  });
};

// exports.permenantlyDelete = async (req, res) => {
//   const id = parseInt(req.params.id);
//   await User.destroy({ where: { id } });
//   res.status(200).json({
//     status: "success",
//     data: null,
//   });
// };
