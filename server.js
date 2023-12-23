const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./Routes/userRoutes");
const blogRoutes = require("./Routes/BlogRoutes");
const rateLimitMiddleware = require("./Middleware/rateLimiter");
const { getAllBlogs } = require("./Controller/blogController");
require("./Models/Association");

app.use(rateLimitMiddleware);
app.use(express.json());
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);
app.get("/", getAllBlogs);
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
