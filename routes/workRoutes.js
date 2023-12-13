const express = require("express");
const router = express.Router();
const workController = require("../controllers/workController");

router
  .route("/")
  .get(workController.getAllWork)
  .post(workController.createWork);
router
  .route("/:id")
  .get(workController.getWork)
  .patch(workController.updateWork);
module.exports = router;
