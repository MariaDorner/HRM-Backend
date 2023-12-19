const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

router.route("/:id").get(fileController.getFile);
router.route("/:id/preview").get(fileController.previewFile);

module.exports = router;
