import { UsersModel } from "../models/userModel.js";

const userController = {
  register: async (req, res) => {
    const user = new UsersModel(req.body);
  
    res.status(200).send({
      _id: user._id,
      name: user.name,
    });
  },

  delete: async (req, res, idUser) => {
    const user = await UsersModel.find({id: idUser || req.body.id});

    if (user) {
      user.remove().exec();
      res.status(200).send({message: 'Delete user success'});
    }
  },

  getAllUser: async (req, res) => {
    const users = await UsersModel.find();
    if (users) {
      res.status(200).send(users);
    }
  }
}

export default userController;