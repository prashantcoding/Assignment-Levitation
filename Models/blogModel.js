const { Sequelize, DataTypes } = require('sequelize');
const db = require('../Database/database');
const User = require('../Models/userModel');

const Blogs = db.define('Blogs', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        defaultValue: false,
    },
    content: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Content cannot be empty'
            },
            len: {
                args: [1, 5000], 
                msg: 'Content must be between 1 and 5000 characters'
            }
            
        }
    }
});

module.exports = Blogs;
