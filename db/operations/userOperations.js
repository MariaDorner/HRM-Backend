const User = require("../models/user");
const bcrypt = require("bcryptjs");

const createUser = async function (data) {
  data.password = await bcrypt.hash(data.password, 12);
  const newUser = await User.create(data);
  return newUser;
};

const updateUser = async function (data, body) {
  const id = parseInt(data);

  await User.update(body, {
    where: { id },
  });

  const userInstance = await User.findOne({ where: { id } });

  if (body.skills) userInstance.setSkills(body.skills);
  if (body.work) userInstance.setWorks(body.work);
  return userInstance;
};
// const deleteUser = async function (data) {
//   const id = parseInt(data);
//   const user = await User.update({ isDeleted: true }, { where: { id } });

//   return user;
// };

module.exports = {
  createUser,

  updateUser,
  // deleteUser,
};
