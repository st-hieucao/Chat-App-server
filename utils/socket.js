import { Server } from "socket.io";
import userController from "../controllers/userController.js";

const connectSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "PATCH"],
      allowedHeaders: ["my-custom-header"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log(`${socket.id} connected`);
    
    socket.on("join_room", (user) => {
      socket.join(user._id);
    });

    socket.on('disconnect', async (idUser) => {
      console.log(socket.id, 'leaved');
      userController.delete(null, null, idUser);
    });
  });
};

export default connectSocket;
