const Skill = require("../models/skill");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const Work = require("../models/work");
const Department = require("../models/department");
const Education = require("../models/education");
const { createFile } = require("./file");

const createUser = async (userData) => {
  try {
    userData.password = await bcrypt.hash(userData.password, 12);
    // Upload the image and get the file path or identifier
    // const imageReference = await uploadImage(profileImageFile);
    const { profileImage, ...restUserData } = userData;
    // Create the user with the image reference
    const newUser = await User.create({
      status: true,
      ...restUserData,
      profileImage, // Associate the image with the user
    });
    if (userData.skills) newUser.setSkills(userData.skills);
    if (userData.work) newUser.setWorks(userData.work);
    if (userData.education) newUser.setEducation(userData.education);
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

const getUsers = async function (options = { withWork: false }) {
  const include = [];

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
  const users = await User.findAll({
    where: { status: true },
    attributes: { exclude: ["password"] },
    include: include,
  });
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
  if (body.education) userInstance.addEducation(body.education);
  return userInstance;
};
const deleteUser = async function (data) {
  const id = parseInt(data);
  const user = await User.update({ status: false }, { where: { id } });

  return user;
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
