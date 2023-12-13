const {
  createUser,

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
