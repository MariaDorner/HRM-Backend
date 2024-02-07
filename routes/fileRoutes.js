const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");
const { upload } = require("../middlewares/multer");

router.route("/").post(upload.single("file"), fileController.createFile);
router.route("/:id").get(fileController.getFile);
router.route("/:id/preview").get(fileController.previewFile);

module.exports = router;
