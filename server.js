const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("./Routes/userRoutes");
const blogRoutes = require("./Routes/BlogRoutes");
const rateLimitMiddleware = require("./Middleware/rateLimiter");
require("./Models/Association");
require("dotenv").config();
app.use(rateLimitMiddleware);
app.use(express.json());
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);
app.listen(3000, () => {
  console.log("Running on Port 3000");
});
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PATCH"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
