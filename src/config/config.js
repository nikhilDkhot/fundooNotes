require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: process.env.DIALECT,
    secret: process.env.SECRET_KEY,
    forget_secreat: process.env.FORGET_SECREAT
    
  },
  test: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: process.env.DIALECT,
    secret: process.env.SECRET_KEY,
    forget_secreat: process.env.FORGET_SECREAT
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: process.env.DIALECT,
    secret: process.env.SECRET_KEY,
    forget_secreat: process.env.FORGET_SECREAT
  }
};
