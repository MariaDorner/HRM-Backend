const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillController");

router.route("/").post(skillController.createSkill);
router.route("/:id").patch(skillController.updateSkill);
module.exports = router;
