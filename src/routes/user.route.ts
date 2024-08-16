import express, { IRouter } from 'express';
import userController from '../controllers/user.controller';
import userValidator from '../validators/user.validator';
import { userAuth,forgotUser } from '../middlewares/auth.middleware';

class UserRoutes {
  private UserController = new userController();
  private router = express.Router();
  private UserValidator = new userValidator();
                              
  constructor() {
    this.routes();
  }

  private routes = () => {

    //route to get all users
    //this.router.get('', this.UserController.getAllUsers);

    //route to create a new user
    this.router.post('/register',
      //this.UserValidator.newUser,
      this.UserController.register
    );

    //route to get a single user by their id
    this.router.post('/login', //userAuth, 
    this.UserController.login);

    this.router.get('/getuser/:id', userAuth,  this.UserController.getUser);

    //route to update a user by their id
    this.router.post('update/:id', this.UserController.updateUser);

    this.router.post('/changePass', userAuth, this.UserController.updateUserPassword);

    //route to delete a user by their id
    //this.router.delete('/:id', this.UserController.deleteUser);

    this.router.post('/forget', this.UserController.forgetUser)

    this.router.post('/reset', forgotUser , this.UserController.reset);


  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
