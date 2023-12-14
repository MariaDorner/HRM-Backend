const express = require("express");
const router = express.Router();
const educationController = require("../controllers/educationController");

router
  .route("/")
  .get(educationController.getAllEducation)
  .post(educationController.createEducation);
router
  .route("/:id")
  .get(educationController.getEducation)
  .patch(educationController.updateEducation);
module.exports = router;
