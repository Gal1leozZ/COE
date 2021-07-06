import UserController from '../controller/users.controller'; 
import express  from 'express';

const UserRouter = express.Router();

UserRouter.post(
    "/createuser",
    UserController.create
);

UserRouter.get(
    "/userlist",
    UserController.getUser
);


export default UserRouter;