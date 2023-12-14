const express = require("express");
const router = express.Router();
const educationController = require("../controllers/educationController");

router.route("/").post(educationController.createEducation);
router.route("/:id").patch(educationController.updateEducation);
module.exports = router;
