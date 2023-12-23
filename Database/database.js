 const { Sequelize } = require('sequelize');

const externalDatabaseUrl = process.env.DataBaseURL;

const db = new Sequelize(externalDatabaseUrl, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
  },
});

// Test the connection
(async () => {
  try {
    await db.authenticate();
    console.log('Connection to the external database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the external database:', error);
  } 
})();
// module.exports = dbconst { Sequelize } = require('sequelize');


/**
 * 
 * Uncomment this to run on localhost but you need to comment abouve one 
 * 
 * // const db=new Sequelize('blogpost','root','',{
//     host:'localhost',
//     dialect:'mysql',
//     logging: false, 
// }
// )

// try {
    
//      db.authenticate();
//     console.log('connection done');
// } catch (error) {
//     console.log('error');
// }

 */
    
module.exports = db;