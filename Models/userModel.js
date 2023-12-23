const { DataTypes } = require('sequelize');
const db = require('../Database/database');
const Blogs=require('../Models/blogModel')
const User = db.define('User', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});




// Export the User model
module.exports = User;
