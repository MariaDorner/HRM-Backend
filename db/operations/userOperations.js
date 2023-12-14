const Skill = require("../models/skill");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const Work = require("../models/work");
const Department = require("../models/department");
const Education = require("../models/education");

const createUser = async function (data) {
  data.password = await bcrypt.hash(data.password, 12);
  const newUser = await User.create(data);
  return newUser;
};

const getUsers = async function () {
  const users = await User.findAll();
  return users;
};

const getUser = async function (
  data,
  options = { withSkills: false, withWork: false, withEducation: false }
) {
  const id = parseInt(data);
  if (!id) return null;
  const include = [];
  if (options.withSkills) {
    include.push({
      model: Skill,
      attributes: ["name", "description"],
      through: { attributes: [] },
    });
  }
  if (options.withWork) {
    include.push({
      model: Work,
      through: { attributes: [] },
      include: [
        {
          model: Department,
          attributes: ["id", "title"],
        },
      ],
    });
  }
  if (options.withEducation) {
    include.push({
      model: Education,
    });
  }
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ["password"] },
    include: include,
  });
  if (!user) return null;

  return user;
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
  getUsers,
  getUser,
  updateUser,
  // deleteUser,
};
