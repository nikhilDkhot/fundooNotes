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
    username: process.env.USERNAME_TEST,
    password: process.env.PASSWORD_TEST,
    database: process.env.DATABASE_TEST,
    host: process.env.HOST_TEST,
    port: process.env.PORT_TEST,
    dialect: process.env.DIALECT_TEST,
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
