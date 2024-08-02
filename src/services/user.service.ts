import sequelize, { DataTypes } from '../config/database';
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

export default UserService;
