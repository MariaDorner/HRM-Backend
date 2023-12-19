// const express = require("express");
// const multer = require("multer");
// const router = express.Router();
// const uploadImage = require("../utils/uploadImage");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // Adjust this path based on your frontend's directory structure
//     cb(null, "./HRM-Frontend/rsuite-admin-template-master/src/images");
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const fileName = `${uniqueSuffix}-${file.originalname}`;
//     cb(null, fileName);
//   },
// });

// const upload = multer({ storage });

// // Image upload route
// router.post("/upload", upload.single("profileImage"), async (req, res) => {
//   try {
//     const imageReference = `/images/${req.file.filename}`;
//     res.json({ success: true, imagePath: imageReference });
//   } catch (error) {
//     console.error("Error uploading image:", error);
//     res.status(500).json({ success: false, error: "Internal Server Error" });
//   }
// });

// module.exports = router;
