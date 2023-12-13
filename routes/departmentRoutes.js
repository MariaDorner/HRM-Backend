const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/departmentController");

router.route("/").post(departmentController.createDepartment);
router.route("/:id").patch(departmentController.updateDepartment);
module.exports = router;
