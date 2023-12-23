const { v4: uuidv4 } = require("uuid");
const User = require("../Models/userModel");
const Blogs = require("../Models/blogModel");

const createBlog = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const id = uuidv4();

    await Blogs.create({
      id,
      title,
      content,
      UserId: userId,
    });

    res.status(200).send("Hey Blog Uploaded");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Can't Upload. Try Again");
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const data = await Blogs.findAll({
      include: {
        model: User,
        attributes: ["userName"],
      },
    });

    const blogs = data.map((blog) => ({
      id: blog.id,
      title: blog.title,
      content: blog.content,
      createdBy: blog.User.userName,
    }));

    res.status(200).send(blogs);
  } catch (error) {
    console.error("Error:", error);
    res.status(504).send("Internal server Error");
  }
};

const getuserblogs = async (req, res) => {
  try {
    const { userId } = req.body;
    const data = await Blogs.findAll({ where: { UserId: userId } });
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error");
  }
};

const deleteblogs = async (req, res) => {
  try {
    const { blogId, userId } = req.body;
    const blog = await Blogs.findOne({ where: { id: blogId } });

    if (!blog || blog.UserId !== userId) {
      res.status(404).send("Blog not found or unauthorized");
    } else {
      await blog.destroy();
      res.status(200).send("Blog Deleted Successfully");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const updateBlogContent = async (req, res) => {
  try {
    const { blogId, newContent } = req.body;
    
    if (!newContent) {
      return res
        .status(400)
        .json({ error: "New content is required for the update." });
    }

    const blog = await Blogs.findByPk(blogId);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    blog.content = newContent;
    await blog.save();

    res.status(200).json({
      message: "Blog content updated successfully",
      updatedBlog: blog,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createBlog, getAllBlogs, getuserblogs, deleteblogs, updateBlogContent };
