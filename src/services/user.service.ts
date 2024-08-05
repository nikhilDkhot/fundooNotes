 /*import sequelize, { DataTypes } from '../config/database';
import { IUser } from '../interfaces/user.interface';

import user from '../models/user';

class UserService {
  private User = user(sequelize, DataTypes);

  //get all users
  public getAllUsers = async (): Promise<IUser[]> => {
    const data = await this.User.findAll();
    return data;
  };

  //create a new user
  public register = async (body) => {
    const data = await this.User.create(body);
    return data;
  };

  //update a user
  public updateUser = async (id, body) => {
    await this.User.update(body, {
      where: { id: id }
    });
    return body;
  };

  //delete a user
  public deleteUser = async (id) => {
    await this.User.destroy({ where: { id: id } });
    return '';
  };

  //get a single user
  public login = async (email,password) => {
    const data = await this.User.findOne({where :{ email : email}});
    let obj ={
      data : data,
      message : "invalid user"
    }
    if(data && (data.password === password)){
       obj.message ='login done';
    } 
    else{
      obj.data = null;
      return obj
    }
    return obj;
  };
}

export default UserService;*/
 

import sequelize, { DataTypes } from '../config/database';
import { IUser } from '../interfaces/user.interface';
import bcrypt from 'bcrypt';
import user from '../models/user';
import { log } from 'winston';
import jwt  from 'jsonwebtoken';

const saltRound: number = 10;
const secretKey = process.env.SECRET_KEY

class UserService {
  private User = user(sequelize, DataTypes);

  //Register a new user

  public register = async (body) => {
    try {
      //bcrypt
      const hashedPassword = await bcrypt.hash(body.password, saltRound);
      body.password = hashedPassword;
      const data = await this.User.create(body);
      return data;
    } catch (error) {
      throw new Error('Error registering user: ' + error.message);
    }
  };

  //Login User
  public login = async (email, password) => {
    try {
      const data = await this.User.findOne({ where: { email: email } });
      let obj = {
        data :data,
        message: 'Invalid User',
        token : ""
      }
      if (data && (await bcrypt.compare(password, data.password))) {
        obj.message = 'Loged In successfully';
      } else {
          obj.data = null;
          return obj;
        
      }
      //for jwt token
      const token = jwt.sign({ id: data.id }, secretKey, { expiresIn: '1h' });
      obj.token = token;
      return obj;
    } catch (error) {
      throw new error('Error Logging user: ');
    }
  };

  //get all users
  public getAllUsers = async (): Promise<IUser[]> => {
    const data = await this.User.findAll();
    return data;
  };

  //update a user
  public updateUser = async (id, body) => {
    await this.User.update(body, {
      where: { id: id }
    });
    return body;
  };

  //delete a user
  public deleteUser = async (id) => {
    await this.User.destroy({ where: { id: id } });
    return '';
  };
}

export default UserService; 