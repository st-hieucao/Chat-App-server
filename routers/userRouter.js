import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post("/get-all", userController.getAllUser);
userRouter.post("/register", userController.register);
userRouter.post("/delete", userController.delete);

export default userRouter;
