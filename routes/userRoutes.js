const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { upload } = require("../middlewares/multer");

router
  .route("/")
  .get(userController.getUsers)
  .post(upload.single("profileImage"), userController.createUser);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
module.exports = router;
