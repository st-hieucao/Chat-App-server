import { UsersModel } from "../models/userModel.js";

const userController = {
  register: async (req, res) => {
    const user = new UsersModel(req.body);
    user.isOnline = false;
    await user.save();
  
    res.status(200).send({
      _id: user._id,
      name: user.name,
    });
  },

  delete: async (req, res, idUser) => {
    const user = await UsersModel.findOne({id: idUser || req.body.id});

    if (user) {
      try {
        await user.remove().exec();
        res.status(200).send({message: 'Delete user success'});
      } catch (error) {
        console.log(error);
      }
    }
  },

  getAllUser: async (req, res) => {
    const users = await UsersModel.find({ isOnline: true});
    if (users) {
      res.status(200).send(users);
    }
  },

  updateStatus: async (userId, status) => {
    try {
      const user = await UsersModel.findOne({_id: userId});
      user.isOnline = status;
      await user.save();
    } catch (error) {
      console.log(error);
    }
  }
}

export default userController;