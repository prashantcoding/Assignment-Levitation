const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { checkPassword } = require("../Utils/PassowordStrength");
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({
      where: { email: email },
    });

    if (existingUser) {
      return res.status(403).json({ message: "User Already Exists" });
    }
    if (!checkPassword(password)) {
      res.status(400).send({ message: "Increase Password Strength" });
      return;
    }
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const id = await uuidv4();
    await User.create({
      id: id,
      userName: username,
      password: hashedPassword,
      email: email,
    });

    return res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const userData = {
      userId: user.id,
    };

    const authToken = jwt.sign(userData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      message: "Login successful",
      authToken: authToken,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { registerUser, userLogin };
