const express = require("express");
const router = express.Router();
const workController = require("../controllers/workController");

router.route("/").post(workController.createWork);
router.route("/:id").patch(workController.updateWork);
module.exports = router;
