const express = require("express");
const app = express();
const port = 3000;
const { init } = require("./db/index");
const userRoutes = require("./routes/userRoutes");
const skillRoutes = require("./routes/skillRoutes");
const workRoutes = require("./routes/workRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
// const cors = require("cors");

init().then(() => {
  // app.use(
  //   cors({
  //     origin: config.clientUrl,
  //     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //   })
  // );
  app.use(express.json({ limit: "10kb" }));
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use("/users", userRoutes);
  app.use("/skills", skillRoutes);
  app.use("/work", workRoutes);
  app.use("/departments", departmentRoutes);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
