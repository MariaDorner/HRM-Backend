const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/departmentController");

router
  .route("/")
  .get(departmentController.getDepartments)
  .post(departmentController.createDepartment);
router
  .route("/:id")
  .get(departmentController.getDepartment)
  .patch(departmentController.updateDepartment);
module.exports = router;
