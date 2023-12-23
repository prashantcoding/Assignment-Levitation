const User=require('../Models/userModel')
const blogs=require('../Models/blogModel')
const db=require('../Database/database')
User.hasMany(blogs, { foreignKey: 'UserId', allowNull: false });
blogs.belongsTo(User, { foreignKey: 'UserId', allowNull: false });


db.sync()
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Error synchronizing the database:', error);
    });
