const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  // deleteUser,
} = require("../db/operations/userOperations");

exports.createUser = async (req, res) => {
  console.log(req.body);
  const newUser = await createUser(req.body);
  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
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
// exports.deleteUser = async (req, res) => {
//   deleteUser(req.params.id);
//   res.status(200).json({
//     status: "success",
//     data: null,
//   });
// };

// exports.permenantlyDelete = async (req, res) => {
//   const id = parseInt(req.params.id);
//   await User.destroy({ where: { id } });
//   res.status(200).json({
//     status: "success",
//     data: null,
//   });
// };
