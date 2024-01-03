// controllers/memberController.js
const Department = require("../db/models/department");
const User = require("../db/models/user");
const Work = require("../db/models/work");
const Skill = require("../db/models/skill");
const Education = require("../db/models/education");

const createMember = async (req, res) => {
  const { department, work, skill, education } = req.body;
  const user = req.body.user;
  console.log(req.body.user);

  console.log(req.body);

  try {
    // Create Department
    const createdDepartment = await Department.create(department);

    // Create User with DepartmentId
    const createdUser = await User.create({
      ...user,
    });

    // Create Work with UserId
    const createdWork = await Work.create({
      ...work,
      DepartmentId: createdDepartment.id,
    });

    // Create Skill
    const createdSkill = await Skill.create(skill);

    // Add Skill to User
    await createdUser.addSkill(createdSkill);
    await createdUser.addWork(createdWork);
    // Create Education with UserId
    const createdEducation = await Education.create({
      ...education,
      UserId: createdUser.id,
    });

    res.status(201).json({
      message: "Member created successfully",
      data: {
        user: createdUser,
        department: createdDepartment,
        work: createdWork,
        skill: createdSkill,
        education: createdEducation,
      },
    });
  } catch (error) {
    console.error("Error creating member:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createMember };
