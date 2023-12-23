const express = require("express");
var router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getuserblogs,
  deleteblogs,
  updateBlogContent,
} = require("../Controller/blogController");
const verifyTokenMiddleware = require("../Middleware/VerifyJWT");

router.get("/getall", getAllBlogs);
router.post("/create", verifyTokenMiddleware, createBlog);

router.get("/getUserBlog", verifyTokenMiddleware, getuserblogs);
router.delete("/deleteBlog", verifyTokenMiddleware, deleteblogs);
router.put("/update", verifyTokenMiddleware, updateBlogContent);

module.exports = router;
