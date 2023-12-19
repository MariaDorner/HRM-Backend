const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./server/uploads"); // Change this path to the desired server-side folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileName = `${uniqueSuffix}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });
module.exports = { upload };
