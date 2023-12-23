 const { Sequelize } = require('sequelize');

const externalDatabaseUrl = 'postgres://blogpost_kge2_user:C6gAZ2nUAhUby8D6YixApP4efvm11Kvh@dpg-cm395hmn7f5s73bmedmg-a.oregon-postgres.render.com/blogpost_kge2';

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
// const db=new Sequelize('blogpost','root','',{
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
    
module.exports = db;