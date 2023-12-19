// const fs = require("fs/promises");

// // Function to handle image upload logic
// const uploadImage = async (file) => {
//   try {
//     // Do any additional validation or processing here
//     // For example, check file type, size, etc.

//     // Move the file to the destination folder (already specified in Multer configuration)
//     const destinationPath = `./src/images/${file.filename}`;
//     await fs.rename(file.path, destinationPath);

//     // Return the file path or identifier
//     return `/images/${file.filename}`;
//   } catch (error) {
//     console.error("Error in uploadImage:", error);
//     throw error;
//   }
// };

// module.exports = uploadImage;
